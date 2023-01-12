import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'image240x240',
  templateUrl: './image240x240.component.html',
  styleUrls: ['./image240x240.component.scss']
})
export class Image240x240Component implements OnInit, OnChanges {

  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  // toolTip必填欄位
  public width!: string;
  public height!: string;
  public widthRatio!: string;
  public heightRatio!: string;
  public format!: string[];
  public fileSize!: string;

  // component尺寸
  private componentWidth!: string;
  private componentHeight!: string;

  // format顯示
  public formatArray = [];

  // 確定toolTip全部欄位有值 component才顯示
  public isShow: boolean = true;

  @Input() componentSize = {
    width: this.componentWidth,
    height: this.componentHeight
  };

  @Input() toolTipValue = {
    width: this.width,
    height: this.height,
    widthRatio: this.widthRatio,
    heightRatio: this.heightRatio,
    format: this.format,
    fileSize: this.fileSize
  };
  @Input() imageUrl: string;
  @Input() deleteMessage: string = '確定刪除圖片？';
  @Output() uploadImage = new EventEmitter<any>();

  constructor() {
    window['image'] = this;
  }

  ngOnInit(): void {
    // toolTipValue必須有值
    // for (let i = 0; i < Object.values(this.toolTipValue).length; i++) {
    //   if (!Object.values(this.toolTipValue)[i]) {
    //     this.isShow = false;
    //     console.error('必填欄位不得為空值');
    //     return;
    //   };
    // };

    // 暫時不檢查widthRatio、heightRatio
    if (!this.toolTipValue.width || !this.toolTipValue.height || !this.toolTipValue.fileSize || this.toolTipValue.format.length === 0) {
      this.isShow = false;
      console.error('必填欄位不得為空值');
      return;
    };

    this.toolTipValue.format.forEach((format, i) => {
      if (i < this.toolTipValue.format.length - 1) {
        this.formatArray.push(format + '、');
      } else {
        this.formatArray.push(format);
      };
    });

    if (!this.isShow) {
      return;
    };
    
    setTimeout(() => {
      this.container.nativeElement.style.width = `${this.componentSize.width}px`;
      this.container.nativeElement.style.height = `${this.componentSize.height}px`;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.container && changes.imgUrl?.currentValue) {
      this.preview();
    };
  }

  ngAfterContentInit() {
    if (this.container) {
      this.container.nativeElement.style.width = `${this.componentWidth}px`;
      this.container.nativeElement.style.height = `${this.componentHeight}px`;
    };
  }

  onClick(event) {
    event.target.value = '';
  }

  onImageChange(file: File) {
    this.uploadImage.emit(file);
    this.preview();
  }

  onDelete(event: Event) {
    event.stopPropagation();

    if (confirm(`${this.deleteMessage}`)) {
      this.imageUrl = '';
      this.container.nativeElement.style.backgroundImage = '';
      // 為了蓋掉刪除圖片後短暫出現container的hover效果
      setTimeout(() => {
        this.container.nativeElement.classList.remove('uploaded');
      }, 180);
    };
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files;
    if (file[0].type.includes('image') || file[0].type.includes('png')) {
      this.onImageChange(file[0]);
    } else {
      alert('請上傳圖片格式檔案');
      this.onDragleave(event);
      return;
    };

    this.onDragleave(event);
  }

  onDragover(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.container.nativeElement.classList.add('dragover');
  }

  preview() {
    this.container.nativeElement.style.backgroundImage = `url(${this.imageUrl})`;
    this.container.nativeElement.classList.add('uploaded');
    this.container.nativeElement.classList.remove('dragover');
  }

  onDragleave(e) {
    e.preventDefault();
    e.stopPropagation();
    this.container.nativeElement.classList.remove('dragover');
  }

}
