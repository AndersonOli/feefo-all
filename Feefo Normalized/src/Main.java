import implementations.JobRelation;
import implementations.SimpleIndexer;
import interfaces.Indexer;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        /*
          Hi Feefo team,
          <p>
          This code is a bit more complex to call than your sample code, but I hope that's okay.
          My idea here was to use your hint by implementing a structure similar to an inverted index. 
          Inverted indexes are designed to search terms and retrieve content with faster interactions, 
          so I thought it would be a good idea to apply this concept to the challenge. With this approach, 
          we can avoid using if and switch statements because we have an "engine" that already has the answers, 
          so we don't need to ask for the answer.
          Thanks for the opportunity!"
         */
        
        Indexer indexer = new SimpleIndexer();

        // Index the list of jobs
        indexer.add(new JobRelation(1, "Software Engineer", "Java C# Engineer"));
        indexer.add(new JobRelation(2, "Accountant", "Accountant Chief Accountant"));

        // Search for documents with query "Java engineer"
        List<JobRelation> searchResults = indexer.search("Java engineer");
        System.out.println("Search results:");
        for (JobRelation doc : searchResults) {
            System.out.printf("Document ID: %s, Job title normalized: %s, Score: %f%n", doc.id, doc.title, doc.score);
        }

        // Search for documents with query "accountant"
        List<JobRelation> secondSearchResults = indexer.search("Accountant");
        System.out.println("\nSecond search results:");
        for (JobRelation doc : secondSearchResults) {
            System.out.printf("Document ID: %s, Job title normalized: %s, Score: %f%n", doc.id, doc.title, doc.score);
        }
        
        // Bonus
        // Because we can search by related words, we can add more and more languages
        indexer.add(new JobRelation(3, "Developer", "Python JavaScript Java C++ C# Ruby Go Swift TypeScript PHP developer"));
        // Search for documents with query "accountant"
        List<JobRelation> thirdSearchResults = indexer.search("Ruby");
        System.out.println("\nThird search results:");
        for (JobRelation doc : thirdSearchResults) {
            System.out.printf("Document ID: %s, Job title normalized: %s, Score: %f%n", doc.id, doc.title, doc.score);
        }
    }
}