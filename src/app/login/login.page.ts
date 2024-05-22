import { Component, NgZone } from '@angular/core';
import { App, AppState } from '@capacitor/app';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  lastActiveStatus: boolean = false;
  public isLoading = false;
  public showSpinner = false;
  public isIosDevice = true;
  password: string = '';

  constructor(
    zone: NgZone,
    private loadingController: LoadingController,
  ) {
    void App.addListener('appStateChange', async (state: AppState) => {
      if (state.isActive) {
        await zone.run(() => this.fiveSecondLoading());
      }
    });
  }

  fiveSecondLoading(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.showSpinner = true;
      // this.present();
      setTimeout(() => {
        console.log('5 seconds passed', this.password);
        this.showSpinner = false;
        // this.dismiss();
        resolve();
      }, 5000);
    });
  }

  async present() {
    const activeLoader: any = await this.loadingController.getTop();
    if (!activeLoader && !this.isLoading) {
      this.isLoading = true;
      const loadingElement = await this.loadingController.create({
        cssClass: 'custom-loading',
        spinner: this.isIosDevice ? 'lines-sharp' : 'crescent',
      });
      await loadingElement.present();
    }
  }

  async dismiss(): Promise<any> {
    try {
      const activeLoader: any = await this.loadingController.getTop();
      if (activeLoader && activeLoader.clientHeight && this.isLoading) {
        this.isLoading = false;
        await activeLoader.dismiss();
        return true;
      }
    } catch (e: any) {
      return e;
    }
  }
}
