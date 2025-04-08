#include <iostream>

using namespace std;
long ProdusulCifrelorImpare(long n){
long produsul = 1;
if(n==0){
  return 1;
}
 while(n!=0){
    int cifra = n%10;
    if (cifra%2!= 0) produsul*=cifra;
    n/=10;
 }
 cout<<produsul;
}

int main()
{
   long a, b;
   cin>>a>>b;
   long p1 = ProdusulCifrelorImpare(a);
   long p2 = ProdusulCifrelorImpare(b);
   if (p1==p2){
    cout<<"Da";
   }
   else{
    cout<<"Nu, mai incearca";
   }

    return 0;
}
