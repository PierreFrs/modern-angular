import {
  ComponentRef,
  Directive,
  EmbeddedViewRef,
  inject,
  Input, OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {LoaderComponent} from '../components/loader.component';

@Directive({
  selector: '[loading]',
  standalone: true,
})
export class LoaderDirective implements OnInit, OnChanges {
  private readonly templateRef = inject(TemplateRef);
  private readonly vcRef = inject(ViewContainerRef);
  @Input() loading = false;
  templateView: EmbeddedViewRef<any> | null = null;
  loaderRef: ComponentRef<LoaderComponent> | null = null;

  ngOnInit() {
    this.templateView = this.templateRef.createEmbeddedView({});
    this.loaderRef = this.vcRef.createComponent(
      LoaderComponent,
      {
        injector: this.vcRef.injector,
        projectableNodes: [this.templateView.rootNodes],
      },
    );

    this.loaderRef.setInput('loading', this.loading);
  }

  ngOnChanges() {
    this.loaderRef?.setInput('loading', this.loading);
  }
}
