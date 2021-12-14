import React, { useState } from 'react';
import "./Colors.css";

function Colors({func}) {
  const [font, setFont] = useState("sans-serif");
  const [Color, setColor] = useState();
  
  const hex_array = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
  const font_family = ["Abadi MT Condensed Light","Aharoni","Aharoni Bold","Aldhabi","AlternateGothic2 BT","Andale Mono","Andalus","Angsana New","AngsanaUPC","Aparajita","Apple Chancery","Arabic Typesetting","Arial","Arial Black","Arial narrow","Arial Nova","Arial Rounded MT Bold","Arnoldboecklin","Avanta Garde","Bahnschrift","Bahnschrift Light","Bahnschrift SemiBold","Bahnschrift SemiLight","Baskerville","Batang","BatangChe","Big Caslon","BIZ UDGothic","BIZ UDMincho Medium","Blippo","Bodoni MT","Book Antiqua","Book Antiqua","Bookman","Bradley Hand","Browallia New","BrowalliaUPC","Brush Script MT","Brush Script Std","Brushstroke","Calibri","Calibri Light","Calisto MT","Cambodian","Cambria","Cambria Math","Candara","Century Gothic","Chalkduster","Cherokee","Comic Sans","Comic Sans MS","Consolas","Constantia","Copperplate","Copperplate Gothic Light","Copperplate Gothic Bold","Corbel","Cordia New","CordiaUPC","Coronetscript","Courier","Courier New","DaunPenh","David","DengXian","DFKai-SB","Didot","DilleniaUPC","DokChampa","Dotum","DotumChe","Ebrima","Estrangelo Edessa","EucrosiaUPC","Euphemia","FangSong","Florence","Franklin Gothic Medium","FrankRuehl","FreesiaUPC","Futara","Gabriola","Gadugi","Garamond","Gautami","Geneva","Georgia","Georgia Pro","Gill Sans","Gill Sans Nova","Gisha","Goudy Old Style","Gulim","GulimChe","Gungsuh","GungsuhChe","Hebrew","Hoefler Text","HoloLens MDL2 Assets","Impact","Ink Free","IrisUPC","Iskoola Pota","Japanese","JasmineUPC","Javanese Text","Jazz LET","KaiTi","Kalinga","Kartika","Khmer UI","KodchiangUPC","Kokila","Korean","Lao","Lao UI","Latha","Leelawadee","Leelawadee UI","Leelawadee UI Semilight","Levenim MT","LilyUPC","Lucida Bright","Lucida Console","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Lucidatypewriter","Luminari","Malgun Gothic","Malgun Gothic Semilight","Mangal","Marker Felt","Marlett","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft JhengHei UI","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft YaHei UI","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Miriam","Monaco","Mongolian Baiti","MoolBoran","MS Gothic","MS Mincho","MS PGothic","MS PMincho","MS UI Gothic","MV Boli","Myanmar Text","Narkisim","Neue Haas Grotesk Text Pro","New Century Schoolbook","News Gothic MT","Nirmala UI","No automatic language associations","Noto","NSimSun","Nyala","Oldtown","Optima","Palatino","Palatino Linotype","papyrus","Parkavenue","Perpetua","Plantagenet Cherokee","PMingLiU","Raavi","Rockwell","Rockwell Extra Bold","Rockwell Nova","Rockwell Nova Cond","Rockwell Nova Extra Bold","Rod","Sakkal Majalla","Sanskrit Text","sans-serif","Segoe MDL2 Assets","Segoe Print","Segoe Script","Segoe UI","Segoe UI Emoji","serif","Segoe UI Historic","Segoe UI Symbol","Shonar Bangla","Shruti","SimHei","SimKai","Simplified Arabic","Simplified Chinese","SimSun","SimSun-ExtB","Sitka","Snell Roundhan","Stencil Std","Sylfaen","Symbol","Tahoma","Thai","Times New Roman","Traditional Arabic","Traditional Chinese","Trattatello","TTrattatello","Tunga","UD Digi Kyokasho","UD Digi KyoKasho NK-R","UD Digi KyoKasho NP-R","UD Digi KyoKasho N-R","Urdu Typesetting","URW Chancery","Utsaah","Vani","Verdana","Verdana Pro","Vijaya","Vrinda","Webdings","Westminster","Wingdings","Yu Gothic","Yu Gothic UI","Yu Mincho","Zapf Chancery"
];
  
  const color_func = () => {
      let color_hex = "#";
      for (let x = 0; x < 6; x++) {
      let num = Math.floor(Math.random()*(hex_array.length-1));
      let hex = hex_array[num];
      color_hex += hex;
     }
      setColor(color_hex);
      color_hex = "#";
  }
  
  const font_func = () => {
      for (let x = 0; x < font_family.length; x++) {
      let num = Math.floor(Math.random()*(font_family.length-1));
      let Font = font_family[num];
      setFont(Font);
     }
  }
  
  return (
    <>
    <div className="colors-container" style={{
        backgroundColor: Color,
      }}>
      <p className="colors-text" style={{
        color: Color,
        fontFamily: font,
        filter: "invert(100%)"
      }}>Click on the buttons to change font and color into random values. The font is <b>{font}</b></p>
      <p className="colors-text" style={{
        color: Color,
        fontFamily: {font},
        filter: "invert(100%)"
      }}>If text's font doesn't change, then your browser doesn't support the font.</p>
      <p className="colors-text" style={{
        color: Color,
        fontFamily: font,
        filter: "invert(100%)"
      }}>The color is <b>{Color}</b></p>
      <button className="colors-btn" onClick={color_func} style={{
        color: Color,
        borderColor: Color,
        fontFamily: font,
        filter: "invert(100%)"
      }}>Color</button>
      <button className="colors-btn" onClick={font_func} style={{
        color: Color,
        borderColor: Color,
        fontFamily: font,
        filter: "invert(100%)"
      }}>Font</button>
    </div>
    </>
    );
}

export default Colors;