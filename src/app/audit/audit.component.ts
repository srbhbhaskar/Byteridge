import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Audit } from '@/_models';
import { AuditService, AuthenticationService } from '@/_services';

@Component({ 
    templateUrl: 'audit.component.html',
 })
export class AuditComponent implements OnInit {
    audits = [];
    key: string = '_id';
    reverse: boolean = false;
    page: number = 1;
    config: any;
    currentUser:any;
    format:string = '12-hours';

    constructor(
        private authenticationService: AuthenticationService,
        private auditService: AuditService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser= x);
        this.config = {
            id: 'list_pagination',
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.audits.length
        };
    }

    ngOnInit() {
        this.loadAllAudits();
    }

    private loadAllAudits() {
        this.auditService.getAll()
            .pipe(first())
            .subscribe(audits => this.audits = audits);
    }

    sort(key){
        this.key = key;
        this.reverse = !this.reverse;
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }
}