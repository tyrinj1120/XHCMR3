import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { Title , DOCUMENT } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, Params } from "@angular/router";
import { trigger,  state,  style,  animate, transition } from '@angular/animations';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { AdalService } from 'ng2-adal/core';
import { LocalStorageService } from "angular-2-local-storage/dist";
import { ISlimScrollOptions } from 'ng2-slimscroll';

import { AppData } from '../../models/system/app-data/app.data';
import { AppModuleData } from '../../models/system/app-data/app-module.data';
import { AppModuleWorkItemData } from '../../models/system/app-data/app-module-work-item.data';
import { appRouteTransition, appSlideInOut, navigationSlideInOut, rotateLeft, rotateRight, slideChevronBox, slideInOutAnimation, slideContentBox, chevronRotation, appNotificationSlide } from './animations/base.animation';

import { CoreDataService } from "../../core/services/core-data.service";

import { AppConstants } from "../../constants/app.constants";

@Component({
    templateUrl:'./base.component.html', 
    styleUrls: ['./base.component.scss', './animations/base.component.scss'],
    animations: [appRouteTransition(), appSlideInOut(), navigationSlideInOut(), rotateLeft(), rotateRight(), slideChevronBox(), slideInOutAnimation(), slideContentBox(), chevronRotation(), appNotificationSlide()],
    host: { '[@appRouteTransition]': '','[@appSlideInOut]':'','[@navigationSlideInOut]':'','[@rotateLeft]':'', '[@rotateRight]':'','[@slideChevronBox]':'','[@slideInOutAnimation]':'', '[@slideContentBox]':'','[@chevronRotation]':'','[@appNotificationSlide]':''}
    //encapsulation: 1
})
export class BaseComponent implements OnInit {
    public appData:  AppData = new AppData('', '', '', '', '');
    public pageTitle: string = '';
    private appSlideMenuState : string = 'in';
    private navigationSlideMenuState:string = 'out';

    public selectedModule : AppModuleData;

    public navMenuTemplate: string  = ``;
    private tempNavMenuTemplate: string  = ``;
    private slimScrollOptions: ISlimScrollOptions;

    constructor(private coreDataService: CoreDataService, private adalService: AdalService, private localStore: LocalStorageService, private activatedRoute: ActivatedRoute, private router: Router, @Inject(DOCUMENT) private document:any , private titleService: Title) {       
        if (this.coreDataService.getAppData() != null){
            this.appData = this.coreDataService.getAppData();
            this.selectedModule = this.appData.appModuleData[1];
        }
    }

    public ngOnInit() {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map(route => {
                while (route.firstChild) route = route.firstChild;
                    return route;
                })
            .filter(route => route.outlet === 'primary')
            .mergeMap(route => route.data)
            .subscribe((event) => {
                this.pageTitle = event['title'];
                this.titleService.setTitle(this.pageTitle + ' | ' + this.appData.name + ' ' + this.appData.edition);
            }
        );

        // Set for all options
        this.slimScrollOptions = {
            position: 'right',
            barBackground: '#ccc',
            barWidth:'3',
            gridWidth:'0',
            barMargin:'1px 3px',
       };
    }

    public faviconUrl (): string {
         return "url('" + this.appData.faviconUrl + "')"; 
    }

    public logoUrl (): string {
        return "url('" + this.appData.logoUrl + "')";
    }

    public toggleAppSlideMenu () : void {
         this.appSlideMenuState = this.appSlideMenuState === 'out' ? 'in' : 'out';
    }

    public toggleNavigationSlideMenu () : void {
         this.navigationSlideMenuState = this.navigationSlideMenuState === 'out' ? 'in' : 'out';
    }

    public selectModule(value:AppModuleData):void {
        this.selectedModule = value;

        this.toggleAppSlideMenu();
    }

    public navigateToDashboard():void {
        this.toggleAppSlideMenu();
        this.router.navigate(['/dashboard']);
    }

    public navigateToPage(value:AppModuleWorkItemData):void {
        this.router.navigate([value.routePath]);
    }

    public getUserName(): string {
        if (this.adalService.userInfo.profile != null) {
            return this.adalService.userInfo.profile.name;
        }else{
            return '';
        }
    }

    public signOut() {
        this.localStore.remove(AppConstants.ACCESS_TOKEN);
        this.adalService.logOut();
    }
}
