
import {
    getdata
} from './js/getdata'
import {
    senddata
} from './js/senddata'
import {
    getweather
} from './js/getweather'
import {
    sendweather
} from './js/sendweather'
import {
    getpixa
} from './js/getpixa'
import {
    sendpixa
} from './js/sendpixa'
import {
    updateUI
} from './js/updateUI'

import img from './images/mypic.jpeg';
import performAction from './js/app'

// import style files

import './style/color.scss';
import './style/normalize.scss';
import './style/responsive.scss';
import './style/style.scss';
import './style/utilise.scss';

const btng = document.getElementById('generate');
btng.addEventListener('click', event => {
    event.preventDefault();
    performAction()
})

export {
    performAction,
    getdata,
    senddata,
    getweather,
    sendweather,
    getpixa,
    sendpixa,
    updateUI

}