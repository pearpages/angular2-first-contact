@Component({
    selector: 'story-characters',
    templateUrl: './app/characters.component.html',
    styleUrls: ['./app/characters.component.css'],
    directives: [CharacterComponent],
    providers: [CharacterService]
})
export class CharactersComponent implements OnInit {
    @Output() changed = new EventEmitter<Character>();
    @Input() storyId: number;
    characters: Character[];
    selectedCharacter: Character;

    constructor(private _characterService: CharacterService) {}

    ngOnInit() {
        this._characterService.getCharacters(this.storyId)
            .subscribe(characters => this.characters = characters);
    }

    select(selectedCharacter: Character) {
        this.selectedCharacter = selectedCharacter;
        this.changed.emit(selectedCharacter);
    }
}