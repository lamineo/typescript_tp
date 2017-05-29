enum NumberToString { un, deux, trois, quatre, cinq, six, sept, huit, neuf };

export function returnPeopleAndLength(peopleTab: string[] = ['Miles', 'Mick']): Array<[string, number]> {
    return peopleTab.map<[string, number]>(people => [people, people.length]);
}

export function displayPeopleAndLength(peopleTab?: string[], literal?: boolean): void {
    if (literal === undefined || literal === false) {
        returnPeopleAndLength(peopleTab)
            .forEach(([name, size]) => console.log(`${name} contient ${size} caractères`));
        return;
    }

    returnPeopleAndLength(peopleTab)
        .forEach(([name, size]) => {
            if (size <= 9) {
                console.log(`${name} contient ${NumberToString[size-1]} caractères`);
            }
        })

}