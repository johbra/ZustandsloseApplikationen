(ns dosl2clj.ooplai
  (:require [dosl2clj.core :refer :all]))

;; 2.4 Mutually-Recursive Methods

;; The previous section already shows that methods can use other methods by sending messages to self. This other example shows mutually-recursive methods.
;; Try the same definition in Java, and compare the results for "large" numbers. Yes, our small object system does enjoy the benefits of tail-call optimization!
;; (define odd-even
;;   (OBJECT ()
;;           ([method even (n)
;;             (case n
;;               [(0) #t]
;;               [(1) #f]
;;               [else (-> self odd (- n 1))])]
;;            [method odd (n)
;;             (case n
;;               [(0) #f]
;;               [(1) #t]
;;               [else (-> self even (- n 1))])])))

(def odd-even
  (obj {}
       {:even (fn [n]
                (cond
                  (= n 0) true
                  (= n 1) false
                  :else (self :odd (- n 1))))
        :odd  (fn [n]
                (cond
                  (= n 0) false
                  (= n 1) true
                  :else (self :even (- n 1))))}))

;; n > 199 verursacht stack overflow
(odd-even :even 199)

;; 2.5 Nested Objects

;; Because objects and methods are compiled into lambdas in Scheme, our
;; objects inherit interesting properties. First, as we have seen, they
;; are first-class values (otherwise what would be the point?). Also, as
;; we have just seen above, method invocations in tail position are
;; treated as tail calls, and therefore space efficient. We now look at
;; another benefit: we can use higher-order programming patterns, such as
;; objects producing objects (usually called factories). That is, we can
;; define nested objects, with proper lexical scoping.

;; Consider the following example:
;; (define factory
;;   (OBJECT
;;    ([field factor 1]
;;     [field price 10])
;;    ([method factor! (nf) (set! factor nf)]
;;     [method price! (np) (set! price np)]
;;     [method make ()
;;      (OBJECT ([field price price])
;;              ([method val () (* price factor)]))])))

(def factory
  (obj
   {:factor 1
    :price 1000}
   {:make (fn []
            (obj {:price (self :price)}
                 {:val (fn [] (* (self :price) (self :factor)))}))}))
                                        ;((factory :make) :val)
;; lexical scopinf funktioniert noch nicht in dosl2

;; 4 Forwarding and Delegation

;; Éric Tanter Using message sending, an object can always forward a
;; message to another object in case it does not know how to handle
;; it. With our small object system, we can do that explicitly as
;; follows:

;; (define seller
;;   (OBJECT ()
;;           ([method price (prod)
;;             (* (case prod
;;                  ((1) (-> self price1))
;;                  ((2) (-> self price2)))
;;                (-> self unit))]
;;            [method price1 () 100]
;;            [method price2 () 200]
;;            [method unit () 1])))

;; (define broker
;;   (OBJECT
;;    ([field provider seller])
;;    ([method price (prod) (-> provider price prod)])))

;; > (-> broker price 2)
;; 200

(def seller
  (obj {}
       {:price (fn [prod]
                 (* (cond 
                      (= prod 1) (self :price1)
                      (= prod 2) (self :price2))
                    (self :unit)))
        :price1 (fn [] 100)
        :price2 (fn [] 200)
        :unit (fn [] 1)}))

(def broker
  (obj
   {:provider seller}
   {:price (fn [prod] ((self :provider) :price prod))}))

(broker :price 2)


;; 4.1 Message Forwarding

;; We can do better by allowing each object to have a special "partner"
;; object to which it automatically forwards any message it does not
;; understand. We can define a new syntactic abstraction, OBJECT-FWD, for
;; constructing such objects:

;; (defmac (OBJECT-FWD target
;;                     ([field fname init] ...)
;;                     ([method mname args body] ...))

;; das ist (bisher) ind dosl2 nicht möglich !!!!


;; 4.3.1 Singleton and Exceptional Objects 

(def True
  (obj {}
       {:ifTrueFalse (fn [t f] (t))}))

(def False
  (obj {}
       {:ifTrueFalse (fn [t f] (f))}))

(def Bool
  (obj {}
       {:b (fn [expr] (if expr True False))}))

((Bool :b (> 5 4)) :ifTrueFalse (fn [] "ja") (fn [] "nein"))
