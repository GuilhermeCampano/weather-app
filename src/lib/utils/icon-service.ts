export class IconService {
  static readonly iconUrl = '/icons/';
  static async getIcon(name: string): Promise<string> {
    const response = await fetch(`${IconService.iconUrl}${name}.svg`);
    const iconContent = await response.text();
    return iconContent;
  }
}