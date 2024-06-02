import { ActionContainer } from "./actions/container";
import { Action, BaseAction, IAction } from "./actions/action";
import { ILocalizableOwner } from "./localizablestring";
export declare let defaultListCss: {
    root: string;
    item: string;
    searchClearButtonIcon: string;
    loadingIndicator: string;
    itemSelected: string;
    itemWithIcon: string;
    itemDisabled: string;
    itemFocused: string;
    itemTextWrap: string;
    itemIcon: string;
    itemSeparator: string;
    itemBody: string;
    itemsContainer: string;
    itemsContainerFiltering: string;
    filter: string;
    filterIcon: string;
    filterInput: string;
    emptyContainer: string;
    emptyText: string;
};
export interface IListModel {
    items: Array<IAction>;
    onSelectionChanged: (item: IAction, ...params: any[]) => void;
    allowSelection?: boolean;
    searchEnabled?: boolean;
    selectedItem?: IAction;
    elementId?: string;
    locOwner?: ILocalizableOwner;
    onFilterStringChangedCallback?: (text: string) => void;
    onTextSearchCallback?: (item: IAction, textToSearch: string) => boolean;
}
export declare class ListModel<T extends BaseAction = Action> extends ActionContainer<T> {
    onSelectionChanged?: (item: T, ...params: any[]) => void;
    allowSelection?: boolean;
    elementId?: string;
    private listContainerHtmlElement;
    private loadingIndicatorValue;
    private onFilterStringChangedCallback;
    private onTextSearchCallback;
    searchEnabled: boolean;
    showFilter: boolean;
    forceShowFilter: boolean;
    isExpanded: boolean;
    selectedItem: IAction;
    focusedItem: T;
    filterString: string;
    hasVerticalScroller: boolean;
    isAllDataLoaded: boolean;
    showSearchClearButton: boolean;
    renderElements: boolean;
    textWrapEnabled: boolean;
    static INDENT: number;
    static MINELEMENTCOUNT: number;
    scrollHandler: (e?: any) => void;
    areSameItemsCallback: (item1: IAction, item2: IAction) => boolean;
    private hasText;
    isItemVisible(item: T): boolean;
    get visibleItems(): Array<T>;
    private get shouldProcessFilter();
    private onFilterStringChanged;
    private scrollToItem;
    constructor(items: Array<IAction> | IListModel, onSelectionChanged?: (item: T, ...params: any[]) => void, allowSelection?: boolean, selectedItem?: IAction, elementId?: string);
    setOnFilterStringChangedCallback(callback: (text: string) => void): void;
    setOnTextSearchCallback(callback: (item: T, textToSearch: string) => boolean): void;
    setItems(items: Array<IAction>, sortByVisibleIndex?: boolean): void;
    protected onSet(): void;
    protected getDefaultCssClasses(): {
        root: string;
        item: string;
        searchClearButtonIcon: string;
        loadingIndicator: string;
        itemSelected: string;
        itemWithIcon: string;
        itemDisabled: string;
        itemFocused: string;
        itemTextWrap: string;
        itemIcon: string;
        itemSeparator: string;
        itemBody: string;
        itemsContainer: string;
        itemsContainerFiltering: string;
        filter: string;
        filterIcon: string;
        filterInput: string;
        emptyContainer: string;
        emptyText: string;
    };
    onItemClick: (itemValue: T) => void;
    isItemDisabled: (itemValue: T) => boolean;
    isItemSelected: (itemValue: T) => boolean;
    isItemFocused: (itemValue: T) => boolean;
    protected areSameItems(item1: IAction, item2: IAction): boolean;
    getListClass: () => string;
    getItemClass: (itemValue: T) => string;
    getItemIndent: (itemValue: any) => string;
    get filterStringPlaceholder(): string;
    get emptyMessage(): string;
    get scrollableContainer(): HTMLElement;
    get loadingText(): string;
    get loadingIndicator(): T;
    goToItems(event: KeyboardEvent): void;
    onMouseMove(event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onPointerDown(event: PointerEvent, item: any): void;
    refresh(): void;
    onClickSearchClearButton(event: any): void;
    resetFocusedItem(): void;
    focusFirstVisibleItem(): void;
    focusLastVisibleItem(): void;
    initFocusedItem(): void;
    focusNextVisibleItem(): void;
    focusPrevVisibleItem(): void;
    selectFocusedItem(): void;
    initListContainerHtmlElement(htmlElement: HTMLElement): void;
    onLastItemRended(item: T): void;
    scrollToFocusedItem(): void;
    scrollToSelectedItem(): void;
    addScrollEventListener(handler: (e?: any) => void): void;
    removeScrollEventListener(): void;
    dispose(): void;
}
