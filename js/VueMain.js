var app = new Vue({
	el: '#app',
	data: {
		appShow: true
	},
	methods: {
		bosishDiniy() {
			window.location.href = 'diniy.html';
		},
		bosishDunyoviy() {
			window.location.href = 'dunyoviy.html';
		},
	}
})
var dunyoviy = new Vue({
	el: '#dunyoviy',
	data: {
		burgerChangeStyle: {
			burgerButton: true,
			burgerButtonChange: false
		},
		pagesList: {
			pagesListOn: false
		},
		pageListSectionStyle: {
			transform: 'translateY(-100%)',
			position: 'absolute'
		},
		searchButtonStyle: {
			left: '2%'
		},
		leftBody: false,
		styleLeft: {
			transform: 'auto',
			position: 'relative'
		},
		angleStyle: {
			transform: 'rotate(0deg)'
		},
		searchIconStyle: {
			padding: '2px 4px 2px 30px'
		}
	},
	methods: {
		burgerChange() {
			this.burgerChangeStyle.burgerButtonChange = !this.burgerChangeStyle.burgerButtonChange;
			this.pagesList.pagesListOn = !this.pagesList.pagesListOn;
			if (this.pagesList.pagesListOn) {
				this.pageListSectionStyle.transform = 'translateY(0)';
				this.pageListSectionStyle.position = 'sticky';
			} else {
				this.pageListSectionStyle.transform = 'translateY(-100%)';
				this.pageListSectionStyle.position = 'absolute';
			}
		},
		inputin() {
			this.searchButtonStyle.left = '-12%';
			this.searchIconStyle.padding = '2px 4px 2px 4px';
		},
		inputout(event) {
			this.searchButtonStyle.left = '2%';
			this.searchIconStyle.padding = '2px 4px 2px 30px';
			event.target.value = '';
		},
		leftClick() {
			this.leftBody = !this.leftBody;
			if (this.leftBody) {
				this.styleLeft.transform = 'translateX(0)';
				this.angleStyle.transform = 'rotate(180deg)';
			} else {
				this.styleLeft.transform = 'translateX(-100%)';
				this.angleStyle.transform = 'rotate(0deg)';
			}
		},
	}
})
var diniy = new Vue({
	el: '#diniy',
	data: {
		burgerChangeStyle: {
			burgerButton: true,
			burgerButtonChange: false
		},
		pagesList: {
			pagesListOn: false
		},
		pageListSectionStyle: {
			transform: 'translateY(-100%)',
			position: 'absolute'
		},
		searchButtonStyle: {
			left: '2%'
		},
		leftBody: false,
		styleLeft: {
			transform: 'auto',
			position: 'relative'
		},
		angleStyle: {
			transform: 'rotate(0deg)'
		},
		searchIconStyle: {
			padding: '2px 4px 2px 30px'
		}
	},
	methods: {
		burgerChange() {
			this.burgerChangeStyle.burgerButtonChange = !this.burgerChangeStyle.burgerButtonChange;
			this.pagesList.pagesListOn = !this.pagesList.pagesListOn;
			if (this.pagesList.pagesListOn) {
				this.pageListSectionStyle.transform = 'translateY(0)';
				this.pageListSectionStyle.position = 'sticky';
			} else {
				this.pageListSectionStyle.transform = 'translateY(-100%)';
				this.pageListSectionStyle.position = 'absolute';
			}
		},
		inputin() {
			this.searchButtonStyle.left = '-12%';
			this.searchIconStyle.padding = '2px 4px 2px 4px';
		},
		inputout(event) {
			this.searchButtonStyle.left = '2%';
			this.searchIconStyle.padding = '2px 4px 2px 30px';
			event.target.value = '';
		},
		leftClick() {
			this.leftBody = !this.leftBody;
			if (this.leftBody) {
				this.styleLeft.transform = 'translateX(0)';
				this.angleStyle.transform = 'rotate(180deg)';
			} else {
				this.styleLeft.transform = 'translateX(-100%)';
				this.angleStyle.transform = 'rotate(0deg)';
			}
		},
	}
})
var trueConnect = false;
window.onload = () => {
	var preloader = document.querySelector('#preloader');
	setTimeout( function(){
		preloader.style.opacity = '0';
	}, 500);
	setTimeout( function(){
		preloader.style.display = 'none';
		document.querySelector('.trueConnect').style.opacity = '1';
		setTimeout( function(){
			document.querySelector('.trueConnect').style.opacity = '0';
			setTimeout( function(){
				document.querySelector('.trueConnect').style.display = 'none';
			}, 500);
		}, 4000);
	}, 1000);
}
document.querySelector('.page-content-body').addEventListener('scroll', (e) => {
	if (e.target.scrollTop > 0)
		document.querySelector('.page-content-top').style.boxShadow = '0 2px 10px 0 #2b3253';
	else
		document.querySelector('.page-content-top').style.boxShadow = 'none';
})