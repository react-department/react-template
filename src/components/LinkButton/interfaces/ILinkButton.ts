export default interface ILinkButton {
  /**
   * The URL to link.
   */
  to: string,
  /**
   * The title of the link.
   */
  title: string,
  /**
   * optional onClick event handler if you want to make some action.
   */
  onClick?: () => void,
  /**
   * optional data-testid attribute to identify the element in the tests.
   */
  dataTestId?: string,
}
