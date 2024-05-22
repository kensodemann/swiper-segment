import { Component } from '@angular/core';
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
  public isIosDevice = true;

  constructor(private loadingController: LoadingController) {
    void App.addListener('appStateChange', (state: AppState) => {
      if (state.isActive) {
        void this.present();
        setTimeout(() => {
          void this.dismiss();
        }, 5000);
      }
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
    } else {
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
