import { Component, Prop, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'm29-offline-alert',
  styleUrl: 'm29-offline-alert.css',
  shadow: true,
})
export class M29OfflineAlert {
  @Prop() message: string = 'You are offline';
  @Prop() description: string = 'This message will disappear when you are online again';

  @Prop() rounded: boolean = false;
  @Prop() pulse: boolean = false;

  @State() online: boolean = true;

  @Listen('online', { target: 'window' })
  handleOnline() {
    console.log('online');
    this.online = true;
  }

  @Listen('offline', { target: 'window' })
  handleOffline() {
    console.log('offline');
    this.online = false;
  }

  render() {
    if (this.online) {
      return null;
    }

    return (
      <Host>
        <div class={`relative flex w-auto items-center bg-red-200 p-4 font-sans text-xs font-bold text-red-900 ${this.rounded && 'rounded-md'}`}>
          {this.pulse && (
            <span class="absolute -top-1 -right-1 flex h-3 w-3">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
          )}
          <span class="inline-flex rounded-full border-2 border-red-300 bg-red-300">
            <svg enable-background="new 0 0 52 52" height="52" viewBox="0 0 52 52" width="52" class="h-7 w-7 p-1 text-red-700" xmlns="http://www.w3.org/2000/svg">
              <g fill="currentColor">
                <path d="m34.7 36.1c.5-.5.5-1.3 0-1.8l-1.8-1.8c-.5-.5-1.3-.5-1.8 0l-4.4 4.4c-.3.3-.9.3-1.2 0l-4.4-4.4c-.5-.5-1.3-.5-1.8 0l-1.8 1.8c-.5.5-.5 1.3 0 1.8l4.4 4.4c.3.3.3.9 0 1.2l-4.4 4.4c-.5.5-.5 1.3 0 1.8l1.8 1.8c.5.5 1.3.5 1.8 0l4.4-4.4c.3-.3.9-.3 1.2 0l4.4 4.4c.5.5 1.3.5 1.8 0l1.8-1.8c.5-.5.5-1.3 0-1.8l-4.4-4.4c-.3-.3-.3-.9 0-1.2z" />
                <path d="m47.7 11.6c-5.5-6.1-13.3-9.5-21.6-9.5s-16.1 3.4-21.6 9.5c-.4.4-.3 1.1.1 1.4l3 2.6c.4.4 1 .3 1.4-.1 4.4-4.7 10.6-7.4 17.1-7.4s12.7 2.7 17.1 7.4c.4.4 1 .4 1.4.1l3-2.6c.4-.4.5-1 .1-1.4z" />
                <path d="m26.1 16.1c-4.2 0-8.2 1.8-11 5-.4.4-.3 1.1.1 1.5l3.2 2.4c.4.3 1 .3 1.3-.1 1.7-1.8 4-2.8 6.4-2.8s4.7 1 6.3 2.7c.3.4.9.4 1.3.1l3.2-2.4c.5-.4.5-1 .1-1.5-2.7-3.1-6.7-4.9-10.9-4.9z" />
              </g>
            </svg>
          </span>
          <div class="ml-2 flex flex-col">
            <span class="">{this.message}</span>
            <span class="font-light text-red-700">{this.description}</span>
          </div>
        </div>
      </Host>
    );
  }
}
