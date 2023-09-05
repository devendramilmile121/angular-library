export class Chips {
  constructor(
    public label: string,
    public value: any,
    public color: ChipColor
  ) {
    color = 'accent';
  }

  static build(obj: any): Chips {
    if (obj instanceof Chips) {
      return obj;
    } else {
      return new Chips(
        obj['label'],
        obj['value'],
        obj['color'] ? obj['color'] : 'accent'
      );
    }
  }
}

export type ChipColor = 'accent' | 'warn' | 'primary';
