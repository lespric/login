# 任务4————移动端登录页

## 一、任务进展

* 初步尝试用reset按钮代替一键删除功能
  * 只是实现按钮由输入情况来控制显示隐藏；
  * reset会把一个form里面所有输入框内容全部清空。

* 把`<input type="submit"/>`改为`<button type="submit></button>`，并实现按下效果
  * 在 button 元素内部，**可以放置内容**，比如文本或图像，这是该元素与使用 input 元素创建的按钮之间的不同之处；
  * button 控件 与 input type="button" 相比，提供了更为强大的功能和更丰富的内容，前者点击后会跳到save.php的页面，后者则不会跳转；
  * 唯一禁止使用的元素是图像映射，因为它对鼠标和键盘敏感的动作会干扰表单按钮的行为;
  * 由于去除默认样式后，且button的按下效果消失，所以另外用:active伪类选择器，定义点击状态下按钮的样式。

* 完成header固定在顶部
  * 保证header里的任意两个元素去除都不会影响位置；

## 二、成果呈现

![task4](https://github.com/lespric/login/blob/master/gif/task4.gif)

## 三、开发思路

### 1. 切图标注

* 推荐用[蓝湖PS插件](https://lanhuapp.com/ps)，下载好后，根据里面README.txt文件指示完成安装；

* **标注**
  * 安装好后，在PS顶部菜单栏，窗口－扩展功能，选择蓝湖插件；  
  ![01](https://github.com/lespric/login/blob/master/des/01.jpg)
  * 打开后，在上传栏目，选择当前设计尺寸，然后选择全部画板即所有显示的层，点击上传全部画板即可；  
  ![02](https://github.com/lespric/login/blob/master/des/02.png)
  * 上传完后，提示进入蓝湖web端，即打开到蓝湖网页处理；  
  ![03](https://github.com/lespric/login/blob/master/des/03.png)
  * 在蓝湖网页，设计栏目下，双击上传的页面，即可进入该页面查看标注；
    * 任意点击控件即可查看其尺寸，右侧栏显示颜色、圆角大小等数据，点击数据即可复制，即CSS样式设置；
    * 在点击一个控件的同时，把鼠标移到其他控件，即可显示该控件到其他控件的间隔，即margin和padding值；  
  ![04](https://github.com/lespric/login/blob/master/des/04.png)

* **切图**
  * 在PS的蓝湖插件，切换到切图栏目，在图层面板，选择要切的图片层，点击插件上的标记即可，同时在图层面板会生成一个文件夹层；  
  ![05](https://github.com/lespric/login/blob/master/des/05.png)
  * 标记好后，重新上传全部图层，或选择的切片图层，进入到蓝湖web端，再进入到查看标注的步骤；  
  ![06](https://github.com/lespric/login/blob/master/des/06.png)
  * 点击左侧工具栏的切刀图标，选择切图尺寸，点击“下载该页全部切图”，即可把标记好的切图，按切图尺寸，全部下载为一个压缩文件；  
  ![07](https://github.com/lespric/login/blob/master/des/07.png)

### 2. 盒模型布局

参考:  
[HTML5-语义化](http://www.daqianduan.com/6549.html)  
[CSS position(定位)属性](https://www.cnblogs.com/guolao/p/9048308.html)

* **组件分类**：共分为五个组件：标题栏（导航栏）、号码输入区、密码输入区、登录按钮、找回密码区，分别都用div或div的语义化结构标签进行区分；
  * **结构语义化**：根据内容的结构化，选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析；
    * **header**定义文档或者文档的部分区域的页眉，应作为介绍内容或者导航链接栏的容器，如标题栏;
    * **nav**描述一个含有多个超链接的区域，该区域包含跳转到其他页面或页面内部其他部分的链接列表，如导航栏;
    * **main**定义文档的主要内容，该内容在文档中应当是独一无二的，不包含任何在文档中重复的内容，如主体;
    * **article**元素表示文档、页面、应用或网站中的独立结构，是可独立分配的、可复用的结构，如内容组件;
    * **aside**元素表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分且可以被单独的拆分而不会影响整体，如外侧栏或嵌入内容；
    * **footer**定义最近一个章节内容或者根节点元素的页脚,一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息，如标签栏；
    * **section**表示文档中的一个区域（或节），比如，内容中的一个专题组，如控件；
    * **div**，仅仅是为了美化样式或方便脚本使用的时候，应使用div无语义标签，来代替section用来区分；
    * **p**,表示为段落，可以方便文档文本编排的回车操作；  
  ![08](https://github.com/lespric/login/blob/master/des/08.png)

* **控件分类**：每个组件的组成，由各控件按z轴方向逐层组合，一个组件从底到顶按层分控件为：背景层、点缀层、图片层、文字层，由此通过CSS选择器的层叠属性和权值计算，用div的嵌套及父元素布局的声明来逐个赋予样式；

* **控件定位**：根据标注尺寸，以一倍图的尺寸进行布局，由显示的间距来确定各控件的外边距margin和内边距padding值；
  * 根据组件及控件的需求，需常驻可视区域的组件，通过层模型中`position:fixed`，并设置top、bottom、left、right来相对于可视区域进行定位；
  * 需上下滑动来消失的组件，通过`display:flex`或`float:left`来分别声明为弹性布局或浮动模型，前者作用于包含块的子元素，后者作用于当前元素，都可以通过margin和padding来定位；
  * 在常驻可视区域的组件中，各控件可以用绝对定位`position: absolute`来设置top、bottom、left、righ，相对于屏幕定位；
  * 在滑动组件中，先对组件声明为相对定位`position: relative`,再给各控件用绝对定位`position: absolute`来设置top、bottom、left、righ，相对于父元素组件；
    * **绝对定位（absolute）**：相对最近的非static父级定位，设置left、right、top、bottom的距离来使元素位移，，可通过z-index进行层次分级；
    * **相对定位（relative）**：相对于以前位置的偏移，设置left、right、top、bottom的距离来使元素位移，不可层叠，但偏移前的位置保留不变，可以另外在div即块状元素外输入内联元素在以前位置上；
    * **固定定位（fixed）**：相对于视图即屏幕的网页窗口viewpoint，不会受到浏览器的滚动条变化，即悬浮固定，设置left、right、top、bottom的距离来使元素位移，可通过z-index进行层次分级；
  ![09](https://github.com/lespric/login/blob/master/des/09.png)

  * **居中设置技巧**
    * **水平居中**
      * 行内元素：被设置元素为文本、图片等行内元素时，水平居中是通过给父元素设置 `text-align:center` 来实现的;
      * 定宽块状元素：对于width的值固定的块状元素即满足定宽和块状两个条件的元素，可以通过设置`margin:auto auto`来实现居中的;
      * 不定宽块状元素：对于width不固定的元素，如分页导航元素；
        * 加入 table 标签：即在需要设置居中的元素放在table标签里面，再在CSS样式里设置设置`margin:auto auto`；
        * 改为内联元素：先在样式里添加display：inline，来改为行内元素显示，然后使用`text-align:center`来实现居中效果，但是不能设置长度值;
        * 改为层模型：通过给父元素设置 float，然后给父元素设置`position:relative`和 left:50%，子元素设置 position:relative 和 left: -50% 来实现水平居中；

    * **垂直居中**
      * 父元素高度确定的单行文本：设置父元素的 height 和 line-height 高度一致来实现的，但是当文字内容的长度大于块的宽时，就有内容脱离了块；
      * 父元素高度确定的多行文本、图片：使用插入 table  (包括tbody、tr、td在table里面)标签，同时在样式设置`vertical-align：middle`，td标签默认情况下就默认设置了 vertical-align 为 middle；
      * 设置为内联块状元素：通过声明position : absolute，float : left 或 float:right 都会变为内联块状元素，然后在其下面，添加width和height的数值即可修改元素的宽高；

### 3. 功能实现

参考：  
[手机网站自适应](https://blog.csdn.net/fxp850899969/article/details/77119860)  
[HTML5--form表单及常用控件](https://blog.csdn.net/m0_37618340/article/details/80958855)  
[input元素的30个元素属性](https://www.tuicool.com/articles/7V3eqan)  
[nput表单限制纯数字及字符长度](https://blog.csdn.net/youngeffort/article/details/83116211)  
[CSS3实现文本框的清除按钮相关的一些效果](http://www.divcss5.com/css3-style/c50563.shtml)

* **meta对移动端的设置**
![10](https://github.com/lespric/login/blob/master/des/10.png)

* **表单设置**
  * 注意：
    * 所有表单控件（文本框、文本域、按钮、单选框、复选框等）都必须放在 **form** 标签之间，否则用户输入的信息可提交不到服务器上；
    * 表单中的需要提交数据的项都必须指定name属性，并且name的值不能相同;
    * 单选框和复选框的name属性可以相同，在提交数据时，它们会作为一组数据进行提交
  
  * **form**
    * action:指定表单的提交地址（必填）;
    * method:指定表单的提交方式;
      * get：会将请求参数的名和值转换成字符串，并且附加在URL之后，因此可在地址栏中看到请求参数名和值;
      * post：用来传输数据量较大的数据，而且以post方式发送请求参数以及对应的值放在HTML HERDER中传输，请求参数不会显示在URL参数中，安全性相对较高;
    * name:指定表单的唯一名称，通常建议与id属性值设置为一样;
    * target: 打开目标界面方式，是否在新页面打开;
  
* **去除a链接默认样式**：即`a { text-decoration: none; outline: none; }`

* **input美化**
  * **去除默认样式**：去除输入框或按钮的默认边框，以及获取焦点时的蓝色边框，如`input,input:focus { background: none;outline: none;border: none; }`
  * **自动填入历史**：autocomplete属性可以在个别元素或整个表单上开启或关闭浏览器的自动完成功能，当用户在字段开始键入时，浏览器基于之前键入过的值，显示出在字段中填写的选项，如`autocomplete="on"`
  * **互动样式**：
    * 点击背景变化：:active为点击状态，如`.login:active { background-color: #5fc0cd; opacity: 0.5; }`
    * 悬浮背景变化：:hover为悬浮状态，如`.login:hover { background-color: #5fc0cd; opacity: 0.8; }`
    * 获取焦点发光：:focus为获取焦点，如`input:focus{ border-color: #66afe9;box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}`
  * **显示默认文本**：除了value值外，还可以增加placeholder，前者要删除value值，后者点击输入自动删除默认文本，更方便，即占位符会在输入域为空时显示出现，在输入域获得焦点时消失，如`placeholder="请输入数字"`
    * 修改默认文本样式：
    ![11](https://github.com/lespric/login/blob/master/des/11.png)

* **限制input字符**
  * 限制字符长度：在html中，input增加maxlength属性，只适用于type值为text和password的输入框；
  * 限制字符类型：在html中，限制字符类型为数字，方便号码输入框的输入，如input增加`oninput = "value=value.replace(/[^\d]/g,'')"`

* **控制按钮显隐**
  * 先在html，在输入框下方增加一个div，放置清除按钮；
  * 在CSS定义清除按钮的样式，先去除默认样式，再放置清除图标；
  * 然后定义默认状态为隐藏，`.clear { display: none; }`
  * 再定义当输入框输入内容时，清除按钮会显示出来，即`.account input:valid + .clear { display: flex; }`
    * 其中:valid伪类选择器，在输入框定义为required时生效，即有输入内容，输入框才合法，才会生效，生效的样式为 + 号后面的CSS样式，从而实现有输入内容，clear按钮显示出来；

* **header设置**
  * 层模型：父元素定位为固定定位，即position:fixed，再设置top值为0，来固定在顶部，不受垂直滚动条影响；
  * 子元素布局
    * flex布局：header声明为display:flex，且分布方式为justify:space-between，使三个子元素以两端对齐分布，再设置padding值即可完成；
    * 浮动模型：给父元素先声明float:left，再设置`position:relative`和 left:50%，子元素设置 position:relative 和 left: -50% 来实现水平居中，另两个元素用绝对定位position:absolute，来相对于屏幕边缘进行两端定位；

## 四、功能困难

* 一键删除功能：未实现只删除对应的输入框，因reset会清空一个form内所有内容，猜想，设置两个form，各自增加reset按钮，用一个提交按钮提交两个form的内容，要用JS；
* 输入框宽度随文本输入长度而自适应改变，需使用JS提取文本长度，再返回输入框宽度设置；
* 密码明文显示和隐藏：还是要用JS实现，未细看；
* 表单数据储存，未深入了解数据库的连接；

## 五、明天任务

* 分析和尝试任务五
