if (typeof config_site_url === 'undefined' || !config_site_url) {
	var config_site_url = '//adultsearch.com';
}
function quoted(str) {
	return (str != null) ? '"' + str + '"' : '""';
}
function as_show_ad(elem_id, as_sid) {
	if (typeof elem_id == 'undefined')
		return false;
	if (typeof as_sid == 'undefined') {
		as_sid = elem_id;
		elem_id = null;
	}
	var r = (new Date()).getTime();
	var w = window;
	if (typeof(as_sid)=="undefined")
		return false;
	w.as_ads_url = config_site_url + "/promo/show" + "?random=" + r;
	if (typeof(ad_loc) == "string") {
		w.as_ads_url += "&ad_loc="+ad_loc;
	}
	var u = escape(document.URL);
	var sURL = escape(document.referrer);
	if (typeof(w.aspublisher_query)=="undefined") {
		w.aspublisher_query = '';
	}
	w.as_ads_url += '&s='+as_sid+'&u='+u+'&r='+sURL+'&color_bg='+aspublis_color_bg+'&color_border='+aspublis_color_border+'&color_link='+aspublis_color_link+'&color_text='+aspublis_color_text+'&color_url='+aspublis_color_url+'&ad_width='+aspublisher_width+'&ad_height='+aspublisher_height+'&pp=1&ad_query='+w.aspublisher_query;
	if (elem_id) {
		document.getElementById(elem_id).innerHTML = '<ifr'+'ame'+' name="as_ads_frame'+r+'"' +' width="'+aspublisher_width+'"' +' height="'+aspublisher_height+'"' +' frameborder="0"' + ' src='+quoted(w.as_ads_url)+' marginwidth="0"' +' marginheight="0"' +' vspace="0"' +' hspace="0"' +' allowtransparency="true"' +' scrolling="no"></ifr' + 'ame>';
	} else {
		document.write('<ifr' + 'ame' +' name="as_ads_frame'+r+'"' +' width="'+aspublisher_width+'"' +' height="'+aspublisher_height+'"' +' frameborder="0"' + ' src='+quoted(w.as_ads_url)+' marginwidth="0"' +' marginheight="0"' +' vspace="0"' +' hspace="0"' +' allowtransparency="true"' +' scrolling="no">');
		document.write('</ifr' + 'ame>');
	}
}
function as_show_banner(elem_id, as_sid, wi, he) {
	if (typeof elem_id == 'undefined')
		return false;
	if (elem_id === parseInt(elem_id, 10)) {
		he = wi;
		wi = as_sid;
		as_sid = elem_id;
		elem_id = null;
	}
	var r = (new Date()).getTime();
	var w = window;
	if (typeof(as_sid) == 'undefined')
		return false;
	if (typeof(wi) == 'undefined')
		wi = '100%';
	if (typeof(he) == 'undefined')
		he = '100%';
	w.as_ads_url = config_site_url + "/promo/b" + "?random=" + r;
	var u = escape(document.URL);
	var ref = escape(document.referrer);
	w.as_ads_url += '&s='+as_sid+'&u='+u+'&r='+ref;
	if (elem_id) {
		document.getElementById(elem_id).innerHTML = '<ifr' + 'ame' +' name="as_ads_frame'+r+'"' +' width="'+wi+'" height="'+he+'"' +' frameborder="0"' + ' src='+quoted(w.as_ads_url)+' marginwidth="0"' +' marginheight="0"' +' vspace="0"' +' hspace="0"' +' allowtransparency="true"' +' scrolling="no"></ifr' + 'ame>';
	} else {
		document.write('<ifr' + 'ame' +' name="as_ads_frame'+r+'"' +' width="'+wi+'" height="'+he+'"' +' frameborder="0"' + ' src='+quoted(w.as_ads_url)+' marginwidth="0"' +' marginheight="0"' +' vspace="0"' +' hspace="0"' +' allowtransparency="true"' +' scrolling="no">');
		document.write('</ifr' + 'ame>');
	}
}
function as_show_links_jquery(zone_id, elem_id) {
	var promo_l_url = config_site_url + '/promo/l';
	var xhr = $.post(
		promo_l_url,
		{ s: zone_id},
		function (data) {
			$('#'+elem_id).append(data);
		},
		'html');
}
async function as_get_links_async(zone_id, type = 'json') {
	var promo_l_url = config_site_url + '/promo/l?'+ new URLSearchParams({
        s: zone_id,
    }).toString();
    var acceptMimeType = (type == 'html') ? 'text/html' : 'application/json';
    const res = await fetch(promo_l_url, {
        method: "POST",
        headers: {'Accept': acceptMimeType}, 
    });
    const text = await res.text();
    return text;
}
