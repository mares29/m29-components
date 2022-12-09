import { Component, Prop, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'm29-offline-alert',
  styleUrl: 'm29-offline-alert.css',
  shadow: true,
})
export class M29OfflineAlert {
  @Prop() message: string = 'You are offline';
  @Prop() description: string = 'This message will disappear when you are online again.';

  @Prop() rounded: boolean = false;
  @Prop() pulse: boolean = false;
  @Prop() icon: boolean = false;
  @Prop() backdrop: boolean = false;

  @State() online: boolean = true;

  @Listen('online', { target: 'window' })
  handleOnline() {
    this.online = true;
  }

  @Listen('offline', { target: 'window' })
  handleOffline() {
    this.online = false;
  }

  render() {
    if (this.online) {
      return null;
    }

    return (
      <Host>
        <div class={`relative flex w-auto items-start bg-red-200 p-4 font-sans text-xs text-red-900 lg:w-64 ${this.rounded && 'rounded-md'}`}>
          {this.pulse && (
            <span class="absolute -top-1 -right-1 flex h-3 w-3">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
          )}
          {this.icon && (
            <span class="inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </span>
          )}
          <div class="ml-2 flex flex-col">
            <span class="mb-1 mb-1 text-sm font-bold">{this.message}</span>
            <span class="font-light text-red-700">{this.description}</span>
          </div>
        </div>
      </Host>
    );
  }
}
