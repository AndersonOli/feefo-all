package implementations;

/**
 * JobRelation is a model that handles the relation between the normalized job titles
 * and the terms related.
 */

public class JobRelation {
    public int id;
    public String title;
    public String wordsRelated;
    public double score;

    public JobRelation(int id, String title, String wordsRelated) {
        this.id = id;
        this.title = title;
        this.wordsRelated = wordsRelated;
        this.score = 0.0;
    }
}
