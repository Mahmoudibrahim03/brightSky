import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CountriesService} from "../../core/services/countries.service";
import {Countries} from "../../core/interfaces/countries"
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {formValidation} from "../../core/validators/search-valid.validator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewChecked {
  listOfCountries: Countries[] = [];

  selectedToCountry: Countries | undefined;
  selectedFromCountry: Countries | undefined;

  filteredListFromCountries: Countries[] = [];
  filteredListToCountries: Countries[] = [];
  @ViewChild('fromList') fromList: ElementRef | undefined;
  @ViewChild('toList') toList: ElementRef | undefined;

  searchForm!: FormGroup;

  constructor(private countriesService: CountriesService, private route: Router) {

  }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe({
      next: (country) => {
        country.map((city) => {
          this.listOfCountries.push({name: city.name, image: city.image})
        })
      },
    })

    this.searchForm = new FormGroup({
      fromSearch: new FormControl('', [Validators.required], [this.validInputChoice.bind(this)]),
      toSearch: new FormControl('', [Validators.required], [this.validInputChoice.bind(this)]),
    }, [formValidation]);
  }

  hideLists(): void {
    try {
      (this.fromList?.nativeElement).style.display = 'none';
      (this.toList?.nativeElement).style.display = 'none';
    } catch {

    }
  }

  ngAfterViewChecked() {
    window.onclick = ($event: MouseEvent) => {
      if ((($event.target as HTMLElement).tagName) != "LI" &&
        ($event.target as HTMLElement).tagName != "UL" &&
        ($event.target as HTMLElement).tagName != "INPUT" &&
        ($event.target as HTMLElement).className != "listOfCountries") {
        this.hideLists()
      }
    }
  }

  //TODO::move validInputChoice to validators file
  private validInputChoice(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise(resolve => {
      this.countriesService.getCountries().subscribe({
        next: (list) => {
          if (list.some((x) => x.name === control.value)) {
            resolve({"validInputChoice": true})
          } else {
            resolve({"validInputChoice": false})
          }
        }
      })
    });
  }

  /**
   * getSelectedItem(list,index)
   * usedTo: get the selected item data which will be used in search process
   * @param list
   * @param index
   */
  getSelectedItem(list: "from" | "to", index: number): void {
    if (list === "from") {
      this.selectedFromCountry = this.filteredListFromCountries[index]
      this.searchForm.get(['fromSearch'])?.patchValue((this.selectedFromCountry?.name) as string);
    } else {
      this.selectedToCountry = this.filteredListToCountries[index]
      // this.toLocationInput = (this.selectedToCountry?.name) as string
      this.searchForm.get(['toSearch'])?.patchValue((this.selectedToCountry?.name) as string);

    }

    this.hideLists()
  }

  /**
   *
   * @param list
   */
  filterList(list: "from" | "to"): void {
    let result = this.listOfCountries.filter((x) => {
      if (list === "to") {
        return x.name.toLowerCase()?.startsWith((this.searchForm.get(['toSearch'])?.value).toLowerCase());
      } else {
        return x.name.toLowerCase()?.startsWith((this.searchForm.get(['fromSearch'])?.value).toLowerCase());
      }
    })
    list === 'from' ?
      this.filteredListFromCountries = result
      : this.filteredListToCountries = result
  }

  onSubmit() {
    this.countriesService.fromCountry = this.selectedFromCountry;
    this.countriesService.toCountry = this.selectedToCountry;
    this.route.navigate(['/results']);
  }
}
