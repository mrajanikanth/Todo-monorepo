import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectOptionComponent } from '@app/shared/select/select-option/select-option.component';

describe('SelectOptionComponent', () => {
	let component: SelectOptionComponent;
	let fixture: ComponentFixture<SelectOptionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SelectOptionComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SelectOptionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
