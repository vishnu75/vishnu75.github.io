function load_projects() {
	python_projects();
	ml_projects();
	web_dev_projects();
	cp_projects();
	other_projects();
}
function python_projects() {
	var tab_div = document.getElementById('tab1');
	for (var i = 0; i < python.length; i++) {
		console.log(python[i].name);
		var proj_div = document.createElement('div');
		proj_div.setAttribute("class","container proj");
		var proj_main_div = document.createElement('div');
		proj_main_div.setAttribute("class","row proj-main");
		var proj_main_lhs = document.createElement('div');
		proj_main_lhs.setAttribute("class","col s12 m12 l6 center");
		var proj_main_img = document.createElement('img');
		proj_main_img.setAttribute("class","responsive-img circle proj-main-img");
		proj_main_img.setAttribute("src",python[i].image);
		proj_main_lhs.append(proj_main_img);
		proj_main_div.append(proj_main_lhs);
		var proj_main_rhs = document.createElement('div');
		proj_main_rhs.setAttribute("class","col s12 m12 l6");
		var proj_main_rhs_header = document.createElement('h3');
		proj_main_rhs_header.setAttribute("class","center");
		proj_main_rhs_header.innerHTML = python[i].name;
		proj_main_rhs.append(proj_main_rhs_header);
		var proj_main_rhs_para = document.createElement('p');
		proj_main_rhs_para.innerHTML = python[i].description;
		proj_main_rhs.append(proj_main_rhs_para);
		for (var j = 0; j < python[i].tags.length; j++) {
			var chip = document.createElement('div');
			chip.setAttribute("class","chip");
			chip.innerHTML = python[i].tags[j];
			proj_main_rhs.append(chip);
		}
		proj_main_div.append(proj_main_rhs);
		proj_div.append(proj_main_div);
		var proj_links_div = document.createElement('div');
		proj_links_div.setAttribute("class","row proj-links");
		var proj_links_div_row = document.createElement('div');
		proj_links_div_row.setAttribute("class","col s12 m12 l12");
		if (python[i].link[1] != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",python[i].link[0]);
			a_link.setAttribute("target","_blank");
			a_link.innerHTML = python[i].link[2] + "&nbsp;&nbsp;" + python[i].link[1];
			proj_links_div_row.append(a_link);
		}
		if (python[i].download != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",python[i].download);
			a_link.innerHTML = "<i class=\"material-icons\">&#xE2C4;</i>&nbsp;&nbsp;DOWNLOAD";
			proj_links_div_row.append(a_link);
		}
		if (python[i].github != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",python[i].github);
			a_link.setAttribute("target","_blank");
			a_link.innerHTML = '<svg style="width: 30px; height: 30px;" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/></svg>&nbsp;&nbsp;GITHUB';
			proj_links_div_row.append(a_link);
		}
		proj_links_div.append(proj_links_div_row);
		proj_div.append(proj_links_div);
		if (i != (python.length - 1)) {
			var hor_rule = document.createElement('hr');
			proj_div.append(hor_rule);
		}
		tab_div.append(proj_div);
	}
}
function ml_projects() {
	var tab_div = document.getElementById('tab5');
	for (var i = 0; i < ml.length; i++) {
		console.log(ml[i].name);
		var proj_div = document.createElement('div');
		proj_div.setAttribute("class","container proj");
		var proj_main_div = document.createElement('div');
		proj_main_div.setAttribute("class","row proj-main");
		var proj_main_lhs = document.createElement('div');
		proj_main_lhs.setAttribute("class","col s12 m12 l6 center");
		var proj_main_img = document.createElement('img');
		proj_main_img.setAttribute("class","responsive-img circle proj-main-img");
		proj_main_img.setAttribute("src",ml[i].image);
		proj_main_lhs.append(proj_main_img);
		proj_main_div.append(proj_main_lhs);
		var proj_main_rhs = document.createElement('div');
		proj_main_rhs.setAttribute("class","col s12 m12 l6");
		var proj_main_rhs_header = document.createElement('h3');
		proj_main_rhs_header.setAttribute("class","center");
		proj_main_rhs_header.innerHTML = ml[i].name;
		proj_main_rhs.append(proj_main_rhs_header);
		var proj_main_rhs_para = document.createElement('p');
		proj_main_rhs_para.innerHTML = ml[i].description;
		proj_main_rhs.append(proj_main_rhs_para);
		for (var j = 0; j < ml[i].tags.length; j++) {
			var chip = document.createElement('div');
			chip.setAttribute("class","chip");
			chip.innerHTML = ml[i].tags[j];
			proj_main_rhs.append(chip);
		}
		proj_main_div.append(proj_main_rhs);
		proj_div.append(proj_main_div);
		var proj_links_div = document.createElement('div');
		proj_links_div.setAttribute("class","row proj-links");
		var proj_links_div_row = document.createElement('div');
		proj_links_div_row.setAttribute("class","col s12 m12 l12");
		if (ml[i].link[1] != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",ml[i].link[0]);
			a_link.setAttribute("target","_blank");
			a_link.innerHTML = ml[i].link[2] + "&nbsp;&nbsp;" + ml[i].link[1];
			proj_links_div_row.append(a_link);
		}
		if (ml[i].download != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",ml[i].download);
			a_link.innerHTML = "<i class=\"material-icons\">&#xE2C4;</i>&nbsp;&nbsp;DOWNLOAD";
			proj_links_div_row.append(a_link);
		}
		if (ml[i].github != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",ml[i].github);
			a_link.setAttribute("target","_blank");
			a_link.innerHTML = '<svg style="width: 30px; height: 30px;" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/></svg>&nbsp;&nbsp;GITHUB';
			proj_links_div_row.append(a_link);
		}
		proj_links_div.append(proj_links_div_row);
		proj_div.append(proj_links_div);
		if (i != (ml.length - 1)) {
			var hor_rule = document.createElement('hr');
			proj_div.append(hor_rule);
		}
		tab_div.append(proj_div);
	}
}
function web_dev_projects() {
	var tab_div = document.getElementById('tab2');
	for (var i = 0; i < web_dev.length; i++) {
		console.log(web_dev[i].name);
		var proj_div = document.createElement('div');
		proj_div.setAttribute("class","container proj");
		var proj_main_div = document.createElement('div');
		proj_main_div.setAttribute("class","row proj-main");
		var proj_main_lhs = document.createElement('div');
		proj_main_lhs.setAttribute("class","col s12 m12 l6 center");
		var proj_main_img = document.createElement('img');
		proj_main_img.setAttribute("class","responsive-img circle proj-main-img");
		proj_main_img.setAttribute("src",web_dev[i].image);
		proj_main_lhs.append(proj_main_img);
		proj_main_div.append(proj_main_lhs);
		var proj_main_rhs = document.createElement('div');
		proj_main_rhs.setAttribute("class","col s12 m12 l6");
		var proj_main_rhs_header = document.createElement('h3');
		proj_main_rhs_header.setAttribute("class","center");
		proj_main_rhs_header.innerHTML = web_dev[i].name;
		proj_main_rhs.append(proj_main_rhs_header);
		var proj_main_rhs_para = document.createElement('p');
		proj_main_rhs_para.innerHTML = web_dev[i].description;
		proj_main_rhs.append(proj_main_rhs_para);
		for (var j = 0; j < web_dev[i].tags.length; j++) {
			var chip = document.createElement('div');
			chip.setAttribute("class","chip");
			chip.innerHTML = web_dev[i].tags[j];
			proj_main_rhs.append(chip);
		}
		proj_main_div.append(proj_main_rhs);
		proj_div.append(proj_main_div);
		var proj_links_div = document.createElement('div');
		proj_links_div.setAttribute("class","row proj-links");
		var proj_links_div_row = document.createElement('div');
		proj_links_div_row.setAttribute("class","col s12 m12 l12");
		if (web_dev[i].link[1] != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",web_dev[i].link[0]);
			a_link.setAttribute("target","_blank");
			a_link.innerHTML = web_dev[i].link[2] + "&nbsp;&nbsp;" + web_dev[i].link[1];
			proj_links_div_row.append(a_link);
		}
		if (web_dev[i].download != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",web_dev[i].download);
			a_link.innerHTML = "<i class=\"material-icons\">&#xE2C4;</i>&nbsp;&nbsp;DOWNLOAD";
			proj_links_div_row.append(a_link);
		}
		if (web_dev[i].github != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",web_dev[i].github);
			a_link.setAttribute("target","_blank");
			a_link.innerHTML = '<svg style="width: 30px; height: 30px;" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/></svg>&nbsp;&nbsp;GITHUB';
			proj_links_div_row.append(a_link);
		}
		proj_links_div.append(proj_links_div_row);
		proj_div.append(proj_links_div);
		if (i != (web_dev.length - 1)) {
			var hor_rule = document.createElement('hr');
			proj_div.append(hor_rule);
		}
		tab_div.append(proj_div);
	}
}
function cp_projects() {
	var tab_div = document.getElementById('tab3');
	for (var i = 0; i < cp.length; i++) {
		console.log(cp[i].name);
		var proj_div = document.createElement('div');
		proj_div.setAttribute("class","container proj");
		var proj_main_div = document.createElement('div');
		proj_main_div.setAttribute("class","row proj-main");
		var proj_main_lhs = document.createElement('div');
		proj_main_lhs.setAttribute("class","col s12 m12 l6 center");
		var proj_main_img = document.createElement('img');
		proj_main_img.setAttribute("class","responsive-img circle proj-main-img");
		proj_main_img.setAttribute("src",cp[i].image);
		proj_main_lhs.append(proj_main_img);
		proj_main_div.append(proj_main_lhs);
		var proj_main_rhs = document.createElement('div');
		proj_main_rhs.setAttribute("class","col s12 m12 l6");
		var proj_main_rhs_header = document.createElement('h3');
		proj_main_rhs_header.setAttribute("class","center");
		proj_main_rhs_header.innerHTML = cp[i].name;
		proj_main_rhs.append(proj_main_rhs_header);
		var proj_main_rhs_para = document.createElement('p');
		proj_main_rhs_para.innerHTML = cp[i].description;
		proj_main_rhs.append(proj_main_rhs_para);
		for (var j = 0; j < cp[i].tags.length; j++) {
			var chip = document.createElement('div');
			chip.setAttribute("class","chip");
			chip.innerHTML = cp[i].tags[j];
			proj_main_rhs.append(chip);
		}
		proj_main_div.append(proj_main_rhs);
		proj_div.append(proj_main_div);
		var proj_links_div = document.createElement('div');
		proj_links_div.setAttribute("class","row proj-links");
		var proj_links_div_row = document.createElement('div');
		proj_links_div_row.setAttribute("class","col s12 m12 l12");
		if (cp[i].link[1] != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",cp[i].link[0]);
			a_link.setAttribute("target","_blank");
			a_link.innerHTML = cp[i].link[2] + "&nbsp;&nbsp;" + cp[i].link[1];
			proj_links_div_row.append(a_link);
		}
		if (cp[i].download != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",cp[i].download);
			a_link.innerHTML = "<i class=\"material-icons\">&#xE2C4;</i>&nbsp;&nbsp;DOWNLOAD";
			proj_links_div_row.append(a_link);
		}
		if (cp[i].github != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",cp[i].github);
			a_link.setAttribute("target","_blank");
			a_link.innerHTML = '<svg style="width: 30px; height: 30px;" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/></svg>&nbsp;&nbsp;GITHUB';
			proj_links_div_row.append(a_link);
		}
		proj_links_div.append(proj_links_div_row);
		proj_div.append(proj_links_div);
		if (i != (cp.length - 1)) {
			var hor_rule = document.createElement('hr');
			proj_div.append(hor_rule);
		}
		tab_div.append(proj_div);
	}
}
function other_projects() {
	var tab_div = document.getElementById('tab4');
	for (var i = 0; i < others.length; i++) {
		console.log(others[i].name);
		var proj_div = document.createElement('div');
		proj_div.setAttribute("class","container proj");
		var proj_main_div = document.createElement('div');
		proj_main_div.setAttribute("class","row proj-main");
		var proj_main_lhs = document.createElement('div');
		proj_main_lhs.setAttribute("class","col s12 m12 l6 center");
		var proj_main_img = document.createElement('img');
		proj_main_img.setAttribute("class","responsive-img circle proj-main-img");
		proj_main_img.setAttribute("src",others[i].image);
		proj_main_lhs.append(proj_main_img);
		proj_main_div.append(proj_main_lhs);
		var proj_main_rhs = document.createElement('div');
		proj_main_rhs.setAttribute("class","col s12 m12 l6");
		var proj_main_rhs_header = document.createElement('h3');
		proj_main_rhs_header.setAttribute("class","center");
		proj_main_rhs_header.innerHTML = others[i].name;
		proj_main_rhs.append(proj_main_rhs_header);
		var proj_main_rhs_para = document.createElement('p');
		proj_main_rhs_para.innerHTML = others[i].description;
		proj_main_rhs.append(proj_main_rhs_para);
		for (var j = 0; j < others[i].tags.length; j++) {
			var chip = document.createElement('div');
			chip.setAttribute("class","chip");
			chip.innerHTML = others[i].tags[j];
			proj_main_rhs.append(chip);
		}
		proj_main_div.append(proj_main_rhs);
		proj_div.append(proj_main_div);
		var proj_links_div = document.createElement('div');
		proj_links_div.setAttribute("class","row proj-links");
		var proj_links_div_row = document.createElement('div');
		proj_links_div_row.setAttribute("class","col s12 m12 l12");
		if (others[i].link[1] != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",others[i].link[0]);
			a_link.setAttribute("target","_blank");
			a_link.innerHTML = others[i].link[2] + "&nbsp;&nbsp;" + others[i].link[1];
			proj_links_div_row.append(a_link);
		}
		if (others[i].download != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",others[i].download);
			a_link.innerHTML = "<i class=\"material-icons\">&#xE2C4;</i>&nbsp;&nbsp;DOWNLOAD";
			proj_links_div_row.append(a_link);
		}
		if (others[i].github != "") {
			var a_link = document.createElement('a');
			a_link.setAttribute("class","waves-effect waves-light btn right");
			a_link.setAttribute("href",others[i].github);
			a_link.setAttribute("target","_blank");
			a_link.innerHTML = '<svg style="width: 30px; height: 30px;" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/></svg>&nbsp;&nbsp;GITHUB';
			proj_links_div_row.append(a_link);
		}
		proj_links_div.append(proj_links_div_row);
		proj_div.append(proj_links_div);
		if (i != (others.length - 1)) {
			var hor_rule = document.createElement('hr');
			proj_div.append(hor_rule);
		}
		tab_div.append(proj_div);
	}
}
$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	particlesJS.load('bubbles-js', 'js/bubbles.json', function() {
		console.log('callback - bubbles.json config loaded');
	});
	$("#quotes-print").typed({
		strings: [
			"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
			"Stay Hungry. Stay Foolish.",
			"Nothing is work unless you'd rather be doing something else.",
			"The past cannot be changed. The future is yet in your power.",
			"If you're going through hell, keep going.",
			"You got one shot, do not miss your chance to blow!",
			"If opportunity doesn't knock, build a door."
		],
		typeSpeed: 0,
		loop: true,
		backDelay: 2000,
		backSpeed: 0,
		shuffle: true
	});
	$('#inspired-id').height($('#links-id').height());
	load_projects();
	var vimeo_links = $('a[href^="https://vimeo.com"');
	vimeo_links.attr("target", "_self");
	vimeo_links.attr("data-fancybox", "");
});

$(window).scroll(function() {
	if ($('#projectscontainer').offset().top - $(window).scrollTop() <= 40) {
		$('.navigation').removeClass('transparent').css('background-color', '#2c2e43');
	}
	else {
		$('.navigation').addClass('transparent').css('background-color', 'inherit');
	}
});