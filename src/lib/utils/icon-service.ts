export class IconService {
  static readonly iconUrl = '/icons/';

  static async getIcon(name: string): Promise<string> {
    const cachedIcon = localStorage.getItem(`icon_${name}`);

    if (cachedIcon) {
      return cachedIcon;
    }
    const icon = await this.fetchIcon(name);
    localStorage.setItem(`icon_${name}`, icon);
    return icon;
  }

  static fetchIcon(name: string): Promise<string> {
    return fetch(`${IconService.iconUrl}${name}.svg`)
      .then((response) => response.text())
  }
}