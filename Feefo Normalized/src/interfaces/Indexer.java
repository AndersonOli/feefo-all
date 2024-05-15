package interfaces;

import java.util.List;
import implementations.JobRelation;

/**
 * Interface for indexing and searching documents.
 * 
 */
public interface Indexer {    
    /**
     * Indexes a document
     * @param jobRelation The document to be indexed
     */
    void add(JobRelation jobRelation);

    /**
     * Searches for documents matching the given query
     * @param query The text search query
     * @return a list of documents matching the query, or empty list if no match
     */
    List<JobRelation> search(String query);
}

