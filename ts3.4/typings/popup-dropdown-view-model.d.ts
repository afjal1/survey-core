import { IPosition } from "./utils/popup";
import { CssClassBuilder } from "./utils/cssClassBuilder";
import { PopupModel } from "./popup";
import { PopupBaseViewModel } from "./popup-view-model";
export declare class PopupDropdownViewModel extends PopupBaseViewModel {
    targetElement?: HTMLElement;
    private scrollEventCallBack;
    private static readonly tabletSizeBreakpoint;
    private calculateIsTablet;
    private resizeEventCallback;
    private resizeWindowCallback;
    private clientY;
    private isTablet;
    private touchStartEventCallback;
    private touchMoveEventCallback;
    private _updatePosition;
    protected getActualHorizontalPosition(): "left" | "center" | "right";
    protected getStyleClass(): CssClassBuilder;
    protected getShowHeader(): boolean;
    protected getPopupHeaderTemplate(): string;
    popupDirection: string;
    pointerTarget: IPosition;
    private recalculatePositionHandler;
    constructor(model: PopupModel, targetElement?: HTMLElement);
    setComponentElement(componentRoot: HTMLElement, targetElement?: HTMLElement | null): void;
    resetComponentElement(): void;
    updateOnShowing(): void;
    private readonly shouldCreateResizeCallback: any;
    updatePosition(isResetHeight: boolean, isDelayUpdating?: boolean): void;
    updateOnHiding(): void;
    protected onModelChanging(newModel: PopupModel): void;
    dispose(): void;
}
