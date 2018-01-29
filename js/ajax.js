$.ajax({
	type:"get",
	url:"http://csit.top/api_goods.php",
	async:true,
	data:{cat_id:45,page:1,pagesize:100},
	success:function(date){
		var json=JSON.parse(date);
		for(var k=0;k<json.data.length;k++)
		{
			var sum="";
			var li=$("<li></li>");
			var sum =$("<img class='remaichanpin' src='"+json.data[k].goods_thumb+"' />");
			li.append(sum);
			
			
			var div=$("<div></div>");
			div.addClass("ul1-div");
			var a=$("<a>"+json.data[k].goods_desc+"</a>");
			var span=$("<span class='price'>￥"+json.data[k].price+"</span>");
			var xuanzhuan=$("<div></div>");
			xuanzhuan.addClass("xuanzhuan");
			var kuji=$("<p class='kuji'>库存告急，快快下手抢~！</p>")
			a.appendTo(div);
			span.appendTo(div);
			xuanzhuan.appendTo(div);
			kuji.appendTo(div);
			var im=$("<img class='remai' src='img/remai.png'/>");
			li.append(div);
			li.append(im)
			$(".ul1").append(li);
		}
	}
});