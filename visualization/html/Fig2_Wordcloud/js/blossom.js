onload=function(){var click_cnt=0,
  $html=document.getElementsByTagName("html")[0],
  $body=document.getElementsByTagName("body")[0];
  $html.onclick=function(e){var $elem=document.createElement("b");
  $elem.style.color="#FFC0CB",
  $elem.style.zIndex=9999,
  $elem.style.position="absolute",
  $elem.style.select="none";
  var x=e.pageX,y=e.pageY;
  switch($elem.style.left=x-10+"px",$elem.style.top=y-20+"px",clearInterval(anim),++click_cnt){
    default:$elem.innerText="🌸"}$elem.style.fontSize=10*Math.random()+8+"px";var increase=0,anim;setTimeout((function(){anim=setInterval((function(){150==++increase&&(clearInterval(anim),$body.removeChild($elem)),$elem.style.top=y-20-increase+"px",$elem.style.opacity=(150-increase)/120}),8)}
  ),70),$body.appendChild($elem)}};
