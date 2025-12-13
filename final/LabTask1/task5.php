<?php

class Book {
    private $title;
    private $author;
    private $year;
    
    public function __construct($title, $author, $year) {
        $this->title = $title;
        $this->author = $author;
        $this->year = $year;
    }
    
    public function getDetails() {
        return "Title: {$this->title}, Author: {$this->author}, Year: {$this->year}";
    }
    
    public function setTitle($title) {
        $this->title = $title;
    }
    
    public function setAuthor($author) {
        $this->author = $author;
    }
    
    public function setYear($year) {
        $this->year = $year;
    }
}

echo "Creating a new Book object:\n";
$book1 = new Book("1984", "George Orwell", 1949);
echo $book1->getDetails() . "\n\n";

echo "Creating another Book object and updating properties:\n";
$book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
echo "Original: " . $book2->getDetails() . "\n";

$book2->setTitle("The Great Gatsby");
$book2->setAuthor("F. Scott Fitzgerald");
$book2->setYear(1925);
echo "Updated: " . $book2->getDetails() . "\n\n";

echo "Creating a third Book object:\n";
$book3 = new Book("Pride and Prejudice", "Jane Austen", 1813);
echo $book3->getDetails() . "\n";

?>
