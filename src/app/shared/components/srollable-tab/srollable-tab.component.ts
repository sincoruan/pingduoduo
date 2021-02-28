import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
export interface TopMenu{
  id:number,
  title: string;
  readonly link?: string;
}

@Component({
  selector: 'app-srollable-tab',
  templateUrl: './srollable-tab.component.html',
  styleUrls: ['./srollable-tab.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SrollableTabComponent 
implements 
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  title = 'pinduoduo';
  @Input() menus: TopMenu[] = [ ];
  @Input() backgroundColor = 'red';
  @Input() titleColor ='yellow';
  @Input() activeColor ='blue';
  @Input() indicatorColor = 'red';
  @Output() tabSelected = new EventEmitter();
  @Input() selectedTabLink:string;

  /** 
   *构造函数永远首先被调用 
  */
  constructor() { 
    /*constructor is always called at the first time*/
    // console.log("constructor....");
  }
  /** 
   *在组件的@Input 属性发生变化时调用 
  */
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log("Input property changes....",changes);
  }

  /**
   * 组件初始化完成，这个函数中，可以安全使用组件
   */
  ngOnInit(): void {
    /*component has been initialized successfully. we can implement sth in this method safely.*/
    // console.log("ngOnInit....");
  }
  /**
   * 脏值检测
   */
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log("ngDoCheck....");
  }

  /**
   * ng-content内容加载完毕后
   */
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log("ngAfterContentInit....");
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    //console.log("ngAfterContentChecked....");
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //console.log("ngAfterViewInit....");
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    //console.log("ngAfterViewChecked....");    
  }

  /**
   * 需要做一些清理工作
   */
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //console.log("ngOnDestroy....");    
  }

  handleSelection(index:number){
    this.tabSelected.emit(this.menus[index]);
  }

}
