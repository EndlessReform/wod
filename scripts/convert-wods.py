import csv
import pandoc

# Characters that need to be escaped in WOD URL
non_url_safe = ['"', '#', '$', '%', '&', '+',
                    ',', '/', ':', ';', '=', '?',
                    '@', '[', '\\', ']', '^', '`',
                    '{', '|', '}', '~', "'"]

# Copied from https://magbanum.tech/python-program-to-make-text-url-safe
def slugify(text):
    non_safe = [character for character in text if character in non_url_safe]
    if non_safe:
        for i in non_safe:
            text = text.replace(i, '')
    text = u'-'.join(text.split())
    return text

def main():
    with open('all_posts.csv', mode="r") as infile:
        csvFile = csv.reader(infile)
        # Skip header
        next(csvFile, None)

        for (i, line) in zip(range(2**16), csvFile):
            doc = pandoc.read(line[4], format="html")
            title = line[2]
            md = pandoc.write(
                doc, 
                format="markdown",
            )
            wod_body = f"---\ntitle: {title}\npublished: {line[3]}\n---\n\n" + md
            wod_slug = slugify(title).lower()
            
            with open(f"../src/pages/wods/{wod_slug}.md", "w") as outfile:
                outfile.write(wod_body)

            if i % 25 == 0:
                print(f"{i} articles extracted; latest: {title}")


if (__name__ == "__main__"):
    main()