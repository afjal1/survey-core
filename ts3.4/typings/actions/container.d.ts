import { Base } from "../base";
import { IAction, Action, BaseAction } from "./action";
import { ILocalizableOwner, LocalizableString } from ".././localizablestring";
export declare let defaultActionBarCss: {
    root: string;
    defaultSizeMode: string;
    smallSizeMode: string;
    item: string;
    itemWithTitle: string;
    itemAsIcon: string;
    itemActive: string;
    itemPressed: string;
    itemIcon: string;
    itemTitle: string;
    itemTitleWithIcon: string;
};
export declare class ActionContainer<T extends BaseAction = Action> extends Base implements ILocalizableOwner {
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    getLocale(): string;
    actions: Array<T>;
    private cssClassesValue;
    protected getRenderedActions(): Array<T>;
    updateCallback: (isResetInitialized: boolean) => void;
    containerCss: string;
    sizeMode: "default" | "small";
    locOwner: ILocalizableOwner;
    isEmpty: boolean;
    locStrsChanged(): void;
    protected raiseUpdate(isResetInitialized: boolean): void;
    protected onSet(): void;
    protected onPush(item: T): void;
    protected onRemove(item: T): void;
    private setActionCssClasses;
    readonly hasActions: boolean;
    readonly renderedActions: Array<T>;
    readonly visibleActions: Array<T>;
    getRootCss(): string;
    protected getDefaultCssClasses(): any;
    cssClasses: any;
    private createAction;
    addAction(val: IAction, sortByVisibleIndex?: boolean): T;
    private sortItems;
    setItems(items: Array<IAction>, sortByVisibleIndex?: boolean): void;
    initResponsivityManager(container: HTMLDivElement, delayedUpdateFunction?: (callback: () => void) => void): void;
    resetResponsivityManager(): void;
    getActionById(id: string): T;
    dispose(): void;
}
