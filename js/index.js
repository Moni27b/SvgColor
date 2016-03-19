var $drawing = $('#drawing'),
    $drawingSelect = $('#select-drawing'),
    $colorSelect = $('#select-color');

	var mainHolder, colorHolder
  var btnRandom, btnClear, btnDownloadSVG, btnDownloadPNG
  var svgObject, svgOutline, svgColor 
  var swatchUp, swatchDown
  var fillSpeed = 0.15
  var chosenColor = '#FFFFFF'
  var colors = ['#FFFFFF', '#8E53A1', '#6ABD46', '#71CCDC', '#F7ED45', '#F7DAAF', '#EC2527', '#F16824', '#CECCCC', '#5A499E', '#06753D', '#024259', '#FDD209', '#7D4829', '#931B1E', '#B44426', '#979797', '#C296C5', '#54B948', '#3C75BB', '#F7ED45', '#E89D5E', '#F26F68', '#F37123', '#676868', '#9060A8', '#169E49', '#3CBEB7', '#FFCD37', '#E5B07D', '#EF3C46', '#FDBE17', '#4E4D4E', '#6B449B', '#BACD3F', '#1890CA', '#FCD55A', '#D8C077', '#A62E32', '#F16A2D', '#343433', '#583E98', '#BA539F', '#9D2482', '#DD64A5', '#DB778D', '#EC4394', '#E0398C', '#68AF46', '#4455A4', '#FBEE34', '#AD732A', '#D91E36', '#F99B2A']
  var closeOffset
  
  function swatchClick(){
    chosenColor = $(this).data('color')
    console.log(chosenColor)
    TweenMax.to(colorHolder, fillSpeed, { backgroundColor:chosenColor })
  }
  function swatchMove(e){
    var moveTo = (e.type == 'mouseenter')? swatchUp: swatchDown;
    TweenMax.to('.swatchHolder', 0.5, moveTo);
  }
  
  function colorMe() {
    TweenMax.to(this, fillSpeed, { fill: chosenColor });
  }
  function colorRollover(e){
    var rollover = (e.type == 'mouseenter')? {scale:1.2}:{scale:1};
    TweenMax.to($(this), 0.05, rollover); 
  }
	
var color = $colorSelect[0].value;
console.log($colorSelect);

$drawingSelect.change(function(event) {  
  $drawing.load(event.target.value);
});

$colorSelect.change(function(event) {
  color = event.target.value;
});

$drawing.click(function(event) {
  event.target.style.fill = color;
});