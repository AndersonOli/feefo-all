package implementations;

import interfaces.Indexer;

import java.util.*;

public class SimpleIndexer implements Indexer {
    public Integer total;
    
    private  static final String WHITESPACE_REGEX = "\\s+";
    private final Map<String, List<JobRelation>> invertedIndex = new HashMap<>();
    
    public SimpleIndexer() {
        this.total = 0;
    }

    /**
     * On add, for each word, we add an array list where we can find the related document
     * @param document The document to be indexed
     */
    @Override
    public void add(JobRelation document) {
        String[] terms = document.wordsRelated.toLowerCase().split(WHITESPACE_REGEX);
        for (String term : terms) {
            invertedIndex.computeIfAbsent(term, k -> new ArrayList<>()).add(document);
        }
        
        this.total += 1;
    }

    /**
     * On search, based on input we try to evaluate how much each word of the query appears on the "database"
     * @param query The text search query
     * @return a list of documents which match the query
     */
    @Override
    public List<JobRelation> search(String query) {
        String[] terms = query.toLowerCase().split(WHITESPACE_REGEX);
        Map<JobRelation, Integer> termFrequency = new HashMap<>();
        Map<JobRelation, Double> scores = new HashMap<>();

        // Calculate term frequency for each document
        for (String term : terms) {
            if (invertedIndex.containsKey(term)) {
                List<JobRelation> jobRelations = invertedIndex.get(term);

                for (JobRelation jobRelation : jobRelations) {
                    termFrequency.put(jobRelation, termFrequency.getOrDefault(jobRelation, 0) + 1);
                }
            }
        }

        // Calculate score for each document
        for (JobRelation jobRelation : termFrequency.keySet()) {
            int termFreqValue = termFrequency.get(jobRelation);
            double normalizedTF = termFreqValue / (double) terms.length;
            jobRelation.score += normalizedTF;
            scores.put(jobRelation, jobRelation.score);
        }

        // Sort documents by score
        List<Map.Entry<JobRelation, Double>> sortedDocs = new ArrayList<>(scores.entrySet());
        sortedDocs.sort((a, b) -> Double.compare(b.getValue(), a.getValue()));

        List<JobRelation> result = new ArrayList<>();
        for (Map.Entry<JobRelation, Double> entry : sortedDocs) {
            result.add(entry.getKey());
        }

        return result;
    }
}
