


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
//! ------------------About Me Section---------------------
let h2AboutMe = React.createElement('h2',null,'About Me')
let pAboutMe = React.createElement('p',null,'I’m specialize in turning complex problems into elegant solutions. My approach blends creativity with strategic thinking to deliver designs that not only look great but work seamlessly. Ready to start your next project?')
let imgAboutMe = React.createElement('img',{src:'https://cdn.prod.website-files.com/691ee828da4f054ab51063b1/692bf772227901c961823bd5_About-Arrow.svg'})
let aboutMe = React.createElement('div',{className:'abouutMe'},[h2AboutMe,pAboutMe,imgAboutMe])

let imgAbout = React.createElement('i',{className:'ri-global-fill'})
let aboutProgress = React.createElement('h1',null,'320%');
let aboutp = React.createElement('p',null,'Average increase in client engagement in the first 6 months')
let img = React.createElement('img',{src:'https://cdn.prod.website-files.com/691ee828da4f054ab51063b1/692bf19e32244507e7290e68_About-Details-1.webp'})
let middleAbout = React.createElement('div',{className:'midAbout'},[imgAbout,aboutProgress,aboutp,img])


let descImg = React.createElement('img',{src:'https://cdn.prod.website-files.com/691ee828da4f054ab51063b1/692bf19e7a8721db610bf66b_6541a04dff41b3af3b15d24a28e6769a_About--Details.webp'})
let upperText = React.createElement('p',null,' With 4+ years of experience, I specialize in creating intuitive, user-focused designs that solve real-world problems and deliver seamless digital experiences.')
let lowerText = React.createElement('p',null,'I thrive on working closely with clients, blending creativity with strategy to bring their vision to life through thoughtful, impactful design solutions.')
let descAbout = React.createElement('div',{className:'descAbout'},[descImg,upperText,lowerText])

let about = React.createElement('div',{className:'about'},[aboutMe,middleAbout,descAbout])

let mainDiv = React.createElement('div', { id: 'main' }, [navBar, mainView,])

//?----------FULL PAGE----------------------------
let fullPage = React.createElement('div',{className:'fullPage'},[mainDiv,about])
const rootElem = document.querySelector('.main')
const root = ReactDOM.createRoot(rootElem);
root.render(fullPage)