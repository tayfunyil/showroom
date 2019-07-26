import {Component} from '@angular/core';
import {Howl} from 'howler';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    sound: any;

    constructor() {

    }

    play(url) {
        this.sound = new Howl({
            src: [url],
            ext: ['mp3'],
            autoplay: false,
            html5: true
        });
        this.sound.play();
    }

    pause() {
        this.sound.pause();
    }

    filter() {
        const t = document.getElementsByTagName('ion-toggle');
        const l = document.getElementsByTagName('ion-card');
        const f = document.getElementsByTagName('ion-searchbar');

        if (!t[0].checked) {
            Array.from(l).forEach((item, _) => {
                if (item.innerHTML.toLowerCase().indexOf(f[0].value.toLowerCase()) === -1) {
                    if (item.style.display !== 'none') {
                        item.style.display = 'none';
                    }
                }
            });

            f[0].value = '';
        } else {
            Array.from(l).forEach((item, _) => {
                if (item.innerHTML.toLowerCase().indexOf(f[0].value.toLowerCase()) !== -1) {
                    item.style.display = 'block';
                }
            });

            f[0].value = '';
        }
    }
}
