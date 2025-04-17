import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/shared/Moment';

@Component({
  selector: 'app-moments-form',
  templateUrl: './moments-form.component.html',
  styleUrls: ['./moments-form.component.scss']
})
export class MomentsFormComponent implements OnInit {

  @Input() btnText!: string
  @Output() onSubmit = new EventEmitter<Moment>()

  momentForm!: FormGroup

  constructor () { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    })
  }

  get title() {
    return this.momentForm.get('title')!
  }
  get description() {
    return this.momentForm.get('description')!
  }


  submit() {
    if (this.momentForm.invalid) {
      return
    }

    this.onSubmit.emit(this.momentForm.value)
  }

  onFilesSelected(event: any) {
    const file: File = event.target.files[0]

    this.momentForm.patchValue({image: file})
  }

}
