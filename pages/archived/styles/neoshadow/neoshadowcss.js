/*==============================================================*\
 *  _  _  ____  _____  ___  _   _    __    ____  _____  _    _  *
 * ( \( )( ___)(  _  )/ __)( )_( )  /__\  (  _ \(  _  )( \/\/ ) *
 *  )  (  )__)  )(_)( \__ \ ) _ (  /(__)\  )(_) ))(_)(  )    (  *
 * (_)\_)(____)(_____)(___/(_) (_)(__)(__)(____/(_____)(__/\__) *
 * NEOSHADOW - The much better successor to shadow.css          *
 * Dynamics JS script                                           *
\*==============================================================*/

(function render(){
    const $$ = document.querySelectorAll.bind(document)
    $$(".ns-neumorph").forEach(elem => elem.style.setProperty("--width", `${Math.floor(elem.getBoundingClientRect().width)}px`));

    // efficient animation loop
    window.requestAnimationFrame(render);
})()