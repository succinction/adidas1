// JavaScript Document
var hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
if(hasRightVersion) {  // if we've detected an acceptable version
    var oeTags = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
    + 'width="970" height="574"'
    + 'codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab">'
    + '<param name="movie" value="adidas_1_post.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#ffccff" />'
    + '<embed src="adidas_1_post.swf" quality="high" bgcolor="#ffccff" '
    + 'width="970" height="574" name="adidas_1_post" align="middle"'
    + 'play="true"'
    + 'loop="false"'
    + 'quality="high"'
    + 'allowScriptAccess="sameDomain"'
    + 'type="application/x-shockwave-flash"'
    + 'pluginspage="https://www.macromedia.com/go/getflashplayer">'
    + '<\/EMBED>'
    + '<\/OBJECT>';
    document.write(oeTags);   // embed the flash movie
  } else {  // flash is too old or we can't detect the plugin
    var alternateContent = 'Alternate HTML content should be placed here.'
  	+ 'This content requires the Macromedia Flash Player.'
   	+ '<a href=https://www.macromedia.com/go/getflash/>Get Flash</a>';
    document.write(alternateContent);  // insert non-flash content
  }