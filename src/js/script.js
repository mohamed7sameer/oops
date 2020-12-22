// Extra small devices (portrait phones, less than 576px)
const xs = 575.98;
// Small devices (landscape phones, less than 768px)
const sm = 767.98;
// Medium devices (tablets, less than 992px)
const md = 991.98;
// Large devices (desktops, less than 1200px)
const lg = 1199.98;

const xImg = '../assets/imgs/'





function funAutoComplete(x,y){
  $(x+" .form-control").autocomplete({
    source: y,
    minLength: 0
  
  });
  
  
  $(x+" .input-group-text-mo-1").on("click",function(){
    $( x+" .form-control" ).autocomplete( "search", "" );  
  })
}



funAutoComplete("#co-input-search-for-a-specific-area",[
  "الشرقية" ,
  "القاهرة" ,
  "الاسكندرية" ,
  "الاقصر" ,
  "الوادى الجديد" ,
  "بنى سويف" ,
  "المنصورة" ,
])




funAutoComplete("#co-input-cars",[
  "مرسيدس" ,
  "سكودا" ,
  "تويوتا" ,
  "شيفورليت" ,
  "جيب" ,
  "هامر" ,
  "تسلا" ,
  "فرارى" ,
])


funAutoComplete("#co-input-type",[
  "فئة سيارات مايكرو" ,
  "فئة سيارات المدن" ,
  "فئة السيارات الاقتصادية" ,
  "فئة السيارات المدمجة" ,
  "فئة السيارات متوسطة الحجم" ,
  "الفئة الابتدائية من السيارات الفارهة" ,
  "فئة السيارات كاملة الحجم" ,
  "الفئة المتوسطة من السيارات الفارهة" ,
  "الفئة كاملة الحجم من السيارات الفارهة" ,
  "فئة السيارات الرياضية" ,
])


funAutoComplete("#co-input-year",[
  "1996" ,
  "1997" ,
  "1998" ,
  "1999" ,
  "2000" ,
  "2001" ,
  "2002" ,
  "2003" ,
  "2004" ,
  "2005" ,
  "2006" ,
  "2007" ,
  "2008" ,
  "2009" ,
  "2010" ,
  "2011" ,
  "2012" ,
  "2013" ,
  "2014" ,
  "2015" ,
  "2016" ,
  "2017" ,
  "2018" ,
  "2019" ,
  "2020" ,
])





funAutoComplete("#co-input-motion-vector",[
  "يدوى" ,
  "اوتوماتك" ,
  "استيب ترونيك" ,
])



funAutoComplete("#co-input-case",[
  "جديد" ,
  "مستعمل" ,
])





  
