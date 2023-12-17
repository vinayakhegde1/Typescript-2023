// The Gift Wrapper 

// solution 
type GiftWrapper<Tpresent extends string, Tfrom extends string, Tto extends string> = {
  present: Tpresent;
  from: Tfrom;
  to: Tto;
}