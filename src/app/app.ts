import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly menuOpen = signal(false);
  protected readonly formStatus = signal('');

  protected formData = {
    nombre: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  };

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onSubmit(): void {
    this.formStatus.set(
      'El formulario aún no está conectado a un canal de recepción. Añade el correo o teléfono de la empresa para activar el envío.',
    );
  }
}
