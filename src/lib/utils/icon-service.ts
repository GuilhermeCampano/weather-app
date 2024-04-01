export class IconService {
  static readonly iconUrl = '/icons/';

  static async getIcon(name: string): Promise<string> {
    const cachedIcon = localStorage.getItem(`icon_${name}`);

    if (cachedIcon) {
      return cachedIcon;
    }
    try {
      const response = await fetch(`${IconService.iconUrl}${name}.svg`);
      const iconContent = await response.text();
      if(response.status !== 200) {
        throw new Error(`Failed to fetch icon: ${name}`);
      }
      localStorage.setItem(`icon_${name}`, iconContent);
      return iconContent;
    } catch (error) {
      return '';
    }
  }

}