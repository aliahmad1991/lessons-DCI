var patt=/DCI/
var str="I hate DCI very much"
// modifiers g , i
str="bla bla bla bla"
patt=/bla/g;
str="test_a test_b test_c test_m"
patt=/test_[abc]/g
// out
str="n l nn lL nnn LLL nnnnn"
patt=/l+/g

str="n l nn lL nnn LLL nnnnn"
patt=/l+/gi

str="3 July,3rd August"
patt=/3(rd)/g


str="3 July,3rd August"
patt=/3(rd)?/g

str="n l nn ll nnn lll nnnnn"
patt=/l{2,3}/g
patt=/l{2}/g
patt=/l{3,}/g


str="google.it google.com google.de"
patt=/^google\.\w+/g





var arr=str.match(patt);
console.log(arr);