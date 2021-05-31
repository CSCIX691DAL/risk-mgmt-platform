import { ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamS21Component} from './team-s21.component';

describe ('TeamS21Component', ()=> {
    let component: TeamS21Component;
    let fixture: ComponentFixture<TeamS21Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ TeamS21Component ]
        })
        .compileComponents();
    });

    beforeEach(() =>{
        fixture = TestBed.createComponent(TeamS21Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>{
        expect(component).toBeTruthy();
    })

    
}) 