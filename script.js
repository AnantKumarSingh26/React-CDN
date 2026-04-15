


let logo = React.createElement('img', { src: './assets/logo.png', alt: 'Fox Icon', style: { width: '50px' } }, null);
let p1 = React.createElement('p', null, 'About Me')
let p2 = React.createElement('p', null, 'Portfolio')
let p3 = React.createElement('p', null, 'Services')
let p4 = React.createElement('p', null, 'Blog')
let navLeft = React.createElement('div', { className: 'navLeft' }, [logo, p1, p2, p3, p4])


let arrow = React.createElement('i', { className: 'ri-arrow-right-up-line' });
let navRightText = React.createElement('p', null, 'Book A Call ')
let navRight = React.createElement('div', { className: 'navRight' }, [
    navRightText,
    arrow
]);

let navBar = React.createElement('div', { className: 'navBar' }, [navLeft, navRight])
//! Nav Bar Completed 
let project = React.createElement('h2', null, '+200')
let projectInfo = React.createElement('p', null, 'Project Completed')
let startup = React.createElement('h2', null, '+50')
let startupInfo = React.createElement('p', null, 'Startup Raised')

let statsLeft = React.createElement('div', null, [project, projectInfo])
let statsRight = React.createElement('div', null, [startup, startupInfo])
let stats = React.createElement('div', { className: 'stats' }, [statsLeft, statsRight])


let hello = React.createElement('h1', null, 'Hello');
let d_hello = React.createElement('p', null, '- It;s D.Noca a design weizerd')
let f_hello = React.createElement('div', { className: 'hello' }, [hello, d_hello])
let scrollDown = React.createElement('div', {className:'scrollDown'}, 'Scroll Down🔻')

let leftText = React.createElement('p', null, '2026━━━━━━━━━━━━━━━━━━━━━━━Product Designer')
let leftSide = React.createElement('div', { className: 'leftSide' }, [leftText])
let rightSide = React.createElement('div', { className: 'rightSide' }, [,stats,f_hello,scrollDown])
let mainView = React.createElement('div', { className: 'mainView' }, [leftSide,rightSide])

let mainDiv = React.createElement('div', { id: 'main' }, [navBar, mainView])
const rootElem = document.querySelector('.main')
const root = ReactDOM.createRoot(rootElem);
root.render(mainDiv)