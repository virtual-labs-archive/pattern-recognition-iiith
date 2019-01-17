

	<!-- Navigation menu is useful to organize the view of 
	multiple sections inside the article-->
	<nav id="experiment-article-navigation" class="default">
        <ul id="experiment-article-navigation-menu">
          <!-- The menu can be dynamically generated to contain 
          the headings of your sections or instead write the 
          menu items of your choice individually enclosedu in 
          <li> tag as shown below-->
          	
          	<?php foreach ($nav as $n) {?>
		        <li> <a href="http://localhost/xampp/vlab/index.php?section= <?php $n['heading']; ?> ">
			<!-- Enclose the icon image of your lab -->
				<?php echo esc_html($n['img'])?> 
			<br>
			<?php echo esc_html($n['heading'])?>
			 </a></li>
			<?php }?>
	
	
	
	</ul>
      </nav>

	
