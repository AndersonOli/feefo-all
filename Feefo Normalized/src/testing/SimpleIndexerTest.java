package testing;

import implementations.JobRelation;
import implementations.SimpleIndexer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class SimpleIndexerTest {
    private SimpleIndexer indexer;

    @BeforeEach
    public void setUp() {
        indexer = new SimpleIndexer();
    }
    
    @Test
    public void add_whenValidInput_returnsVoidWithoutExceptions() {
        JobRelation document = new JobRelation(1, "java programming", "java maven");
        indexer.add(document);
        
        assertEquals(1, indexer.total);
    }

    @Test
    public void search_whenValidInput_returnsDocumentsWithRelatedWord() {
        // Test searching for documents
        JobRelation document1 = new JobRelation(1, "Software Engineer", "Java C# Engineer");

        indexer.add(document1);

        List<JobRelation> result1 = indexer.search("Java engineer");

        assertEquals(1, result1.size());
        assertTrue(result1.contains(document1));
    }
}

