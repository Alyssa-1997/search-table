export class selectOptionItem {
  public value: String | Number;
  public label: String | Number;
}

export class formConfigItem {
  public title: String;
  public code: String;
  public isRequired: Boolean;
  public type?: 'select' | 'input';
  public options?: selectOptionItem[]
}

export class tableHeaderConfigItem {
  public prop: String;
  public label: String;
}
