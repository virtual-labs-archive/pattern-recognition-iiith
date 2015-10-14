package MyPackage;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.Shape;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.geom.Ellipse2D.Double.*;
import java.awt.geom.Line2D;
import java.awt.geom.Line2D.Double.*;
import java.awt.geom.Ellipse2D;
import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.accessibility.AccessibleContext;
import javax.swing.BorderFactory;
import javax.swing.ButtonGroup;
import javax.swing.GroupLayout;
import javax.swing.GroupLayout.Alignment;
import javax.swing.GroupLayout.ParallelGroup;
import javax.swing.GroupLayout.SequentialGroup;
import javax.swing.JApplet;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JSpinner;
import javax.swing.JToggleButton;
import javax.swing.LayoutStyle;
import javax.swing.LayoutStyle.ComponentPlacement;
import javax.swing.SpinnerNumberModel;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;

import org.jfree.chart.ChartMouseEvent;
import org.jfree.chart.ChartMouseListener;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.annotations.XYShapeAnnotation;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.plot.XYPlot;
import org.jfree.chart.renderer.xy.XYItemRenderer;
import org.jfree.data.xy.XYDataItem;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;
import org.jfree.util.ShapeUtilities;

public class Experiment10
  extends JApplet
{
  private JToggleButton add_class_1;
  private JToggleButton add_class_2;
  private ButtonGroup buttonGroup1;
  private JSpinner c1;
  private JSpinner c2;
  private JComboBox class1_select;
  private JButton clear_button;
  private JPanel controls;
  private JButton estimate_run;
  private JButton estimate_start;
  private JButton estimate_step;
  private JButton generate_mean;
  private JPanel graph;
  private JLabel jLabel1;
  private JLabel jLabel7;
  private JLabel jLabel8;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JPanel jPanel4;
  private JRadioButton kmeans_radio;
  private JButton load_class1;
  private JPanel mark_points;
  private JRadioButton mst_radio;
  private JButton reset_axes;
  private Chart1 chart;
  private ChartPanel innerGraph;
  private XYSeriesCollection x1;
  private XYSeries data;
  
  public void init()
  {
    try
    {
      EventQueue.invokeAndWait(new Runnable()
      {
        public void run()
        {
          Experiment10.this.initComponents();
          Experiment10.this.initGraph();
          for (String d : Experiment10.this.datasets) {
            Experiment10.this.class1_select.addItem(d);
          }
        }
      });
    }
    catch (Exception ex)
    {
      ex.printStackTrace();
    }
  }
  
  public void initGraph()
  {
    this.x1 = new XYSeriesCollection();
    
    this.data = new XYSeries("");
    
    Random addcolors = new Random();
    for (int i = 0; i < this.max_means; i++)
    {
      this.means[i] = new XYSeries("");
      this.x1.addSeries(this.means[i]);
    }
    for (int i = 0; i < this.max_means; i++)
    {
      this.clusters[i] = new XYSeries("");
      this.x1.addSeries(this.clusters[i]);
      
      this.ccolors[i][0] = addcolors.nextFloat();
      this.ccolors[i][1] = addcolors.nextFloat();
      this.ccolors[i][2] = addcolors.nextFloat();
    }
    this.x1.addSeries(this.data);
    this.chart = new Chart1(this.x1, "Y-axis", "X-axis");
    
    this.chart.clearSubtitles();
    
    XYPlot mod = (XYPlot)this.chart.getPlot();
    XYItemRenderer renderer = mod.getRenderer();
    
    Shape circ = new Ellipse2D.Double(0.0D, 0.0D, 5.0D, 5.0D);
    Shape cross = ShapeUtilities.createDiagonalCross(3.0F, 1.0F);
    for (int i = 0; i < this.max_means; i++)
    {
      renderer.setSeriesShape(i, cross);
      renderer.setSeriesPaint(i, Color.getHSBColor(this.ccolors[i][0], this.ccolors[i][1], this.ccolors[i][2]));
      
      renderer.setSeriesShape(i + this.max_means, circ);
      renderer.setSeriesPaint(i + this.max_means, Color.getHSBColor(this.ccolors[i][0], this.ccolors[i][1], this.ccolors[i][2]));
    }
    this.innerGraph = new ChartPanel(this.chart);
    
    this.innerGraph.addChartMouseListener(new ChartMouseListener()
    {
      public void chartMouseClicked(ChartMouseEvent e)
      {
        Point2D p = Experiment10.this.innerGraph.translateScreenToJava2D(e.getTrigger().getPoint());
        Rectangle2D plotArea = Experiment10.this.innerGraph.getScreenDataArea();
        XYPlot plot = (XYPlot)Experiment10.this.chart.getPlot();
        
        double chartX = plot.getDomainAxis().java2DToValue(p.getY(), plotArea, plot.getDomainAxisEdge());
        double chartY = plot.getRangeAxis().java2DToValue(p.getX(), plotArea, plot.getRangeAxisEdge());
        if (Experiment10.this.clustering_in_progress == 0) {
          if (Experiment10.this.add_class_1.isSelected()) {
            Experiment10.this.data.add(chartX, chartY);
          } else if ((Experiment10.this.add_class_2.isSelected()) && (Experiment10.this.global_means < Experiment10.this.max_means)) {
            Experiment10.this.means[Experiment10.access$908(Experiment10.this)].add(chartX, chartY);
          }
        }
      }
      
      public void chartMouseMoved(ChartMouseEvent event) {}
    });
    this.graph.add(this.innerGraph);
  }
  
  public static void main(String[] args)
  {
    Experiment10 applet = new Experiment10();
    applet.init();
    JFrame frame = new JFrame("Pattern Recognition : Experiment 6 - Clustering");
    frame.getContentPane().add(applet);
    
    frame.setDefaultCloseOperation(3);
    frame.setSize(900, 500);
    frame.pack();
    frame.setVisible(true);
  }
  
  private void initComponents()
  {
    this.buttonGroup1 = new ButtonGroup();
    this.jLabel1 = new JLabel();
    this.graph = new JPanel();
    this.controls = new JPanel();
    this.mark_points = new JPanel();
    this.add_class_1 = new JToggleButton();
    this.add_class_2 = new JToggleButton();
    this.clear_button = new JButton();
    this.jPanel1 = new JPanel();
    this.class1_select = new JComboBox();
    this.load_class1 = new JButton();
    this.jPanel2 = new JPanel();
    this.generate_mean = new JButton();
    this.c1 = new JSpinner();
    this.c2 = new JSpinner();
    this.jLabel7 = new JLabel();
    this.jLabel8 = new JLabel();
    this.reset_axes = new JButton();
    this.estimate_start = new JButton();
    this.estimate_step = new JButton();
    this.estimate_run = new JButton();
    this.jPanel4 = new JPanel();
    this.kmeans_radio = new JRadioButton();
    this.mst_radio = new JRadioButton();
    
    this.jLabel1.setText("jLabel1");
    
    this.graph.setMinimumSize(new Dimension(400, 400));
    this.graph.setPreferredSize(new Dimension(600, 600));
    this.graph.setLayout(new GridLayout(1, 0));
    getContentPane().add(this.graph, "Center");
    
    this.controls.setPreferredSize(new Dimension(400, 600));
    
    this.mark_points.setBorder(BorderFactory.createTitledBorder("Mark Points"));
    this.mark_points.setPreferredSize(new Dimension(218, 68));
    
    this.add_class_1.setText("Data");
    this.add_class_1.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment10.this.add_class_1ActionPerformed(evt);
      }
    });
    this.add_class_2.setText("Means");
    this.add_class_2.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment10.this.add_class_2ActionPerformed(evt);
      }
    });
    this.clear_button.setText("Clear");
    this.clear_button.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment10.this.clear_buttonActionPerformed(evt);
      }
    });
    GroupLayout mark_pointsLayout = new GroupLayout(this.mark_points);
    this.mark_points.setLayout(mark_pointsLayout);
    mark_pointsLayout.setHorizontalGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(mark_pointsLayout.createSequentialGroup().addContainerGap().addComponent(this.add_class_1).addGap(18, 18, 18).addComponent(this.add_class_2).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED, 42, 32767).addComponent(this.clear_button).addGap(45, 45, 45)));
    
    mark_pointsLayout.setVerticalGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(mark_pointsLayout.createSequentialGroup().addContainerGap().addGroup(mark_pointsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.add_class_1).addComponent(this.add_class_2).addComponent(this.clear_button)).addContainerGap(47, 32767)));
    
    this.jPanel1.setBorder(BorderFactory.createTitledBorder("Load Custom Datasets"));
    
    this.load_class1.setText("Load");
    this.load_class1.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment10.this.load_class1ActionPerformed(evt);
      }
    });
    GroupLayout jPanel1Layout = new GroupLayout(this.jPanel1);
    this.jPanel1.setLayout(jPanel1Layout);
    jPanel1Layout.setHorizontalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel1Layout.createSequentialGroup().addGap(61, 61, 61).addComponent(this.class1_select, -2, 143, -2).addGap(18, 18, 18).addComponent(this.load_class1, -2, 83, -2).addContainerGap(32, 32767)));
    
    jPanel1Layout.setVerticalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup().addContainerGap(-1, 32767).addGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.class1_select, -2, -1, -2).addComponent(this.load_class1)).addContainerGap()));
    
    this.jPanel2.setBorder(BorderFactory.createTitledBorder("Generate Random Values"));
    
    this.generate_mean.setText("Generate");
    this.generate_mean.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment10.this.generate_meanActionPerformed(evt);
      }
    });
    this.c1.setModel(new SpinnerNumberModel(Integer.valueOf(100), Integer.valueOf(0), null, Integer.valueOf(10)));
    
    this.c2.setModel(new SpinnerNumberModel(Integer.valueOf(5), Integer.valueOf(0), Integer.valueOf(20), Integer.valueOf(1)));
    this.c2.setValue(Integer.valueOf(0));
    
    this.jLabel7.setFont(new Font("DejaVu Sans", 1, 14));
    this.jLabel7.setText("Data");
    
    this.jLabel8.setFont(new Font("DejaVu Sans", 1, 14));
    this.jLabel8.setText("Means");
    
    GroupLayout jPanel2Layout = new GroupLayout(this.jPanel2);
    this.jPanel2.setLayout(jPanel2Layout);
    jPanel2Layout.setHorizontalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addContainerGap().addComponent(this.generate_mean).addGap(34, 34, 34).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.c1, -2, 86, -2).addComponent(this.jLabel7)).addGap(18, 18, 18).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.jLabel8).addComponent(this.c2, -1, 73, 32767)).addGap(34, 34, 34)));
    
    jPanel2Layout.setVerticalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addContainerGap().addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.jLabel7).addComponent(this.jLabel8)).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.generate_mean).addComponent(this.c1, -2, -1, -2).addComponent(this.c2, -2, -1, -2)).addContainerGap(-1, 32767)));
    
    this.reset_axes.setText("Resize Axes");
    this.reset_axes.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment10.this.reset_axesActionPerformed(evt);
      }
    });
    this.estimate_start.setText("Start");
    this.estimate_start.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment10.this.estimate_startActionPerformed(evt);
      }
    });
    this.estimate_step.setText("Step");
    this.estimate_step.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment10.this.estimate_stepActionPerformed(evt);
      }
    });
    this.estimate_run.setText("Run");
    this.estimate_run.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment10.this.estimate_runActionPerformed(evt);
      }
    });
    this.jPanel4.setBorder(BorderFactory.createTitledBorder("Generate Random Values"));
    
    this.buttonGroup1.add(this.kmeans_radio);
    this.kmeans_radio.setText("K-Means");
    this.kmeans_radio.addChangeListener(new ChangeListener()
    {
      public void stateChanged(ChangeEvent evt)
      {
        Experiment10.this.Handle(evt);
      }
    });
    this.buttonGroup1.add(this.mst_radio);
    this.mst_radio.setText("MST");
    
    GroupLayout jPanel4Layout = new GroupLayout(this.jPanel4);
    this.jPanel4.setLayout(jPanel4Layout);
    jPanel4Layout.setHorizontalGroup(jPanel4Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel4Layout.createSequentialGroup().addComponent(this.kmeans_radio).addContainerGap(251, 32767)).addGroup(jPanel4Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel4Layout.createSequentialGroup().addGap(139, 139, 139).addComponent(this.mst_radio).addContainerGap(144, 32767))));
    
    jPanel4Layout.setVerticalGroup(jPanel4Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel4Layout.createSequentialGroup().addContainerGap().addComponent(this.kmeans_radio).addContainerGap(21, 32767)).addGroup(jPanel4Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel4Layout.createSequentialGroup().addGap(10, 10, 10).addComponent(this.mst_radio).addContainerGap(19, 32767))));
    
    GroupLayout controlsLayout = new GroupLayout(this.controls);
    this.controls.setLayout(controlsLayout);
    controlsLayout.setHorizontalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addContainerGap().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addComponent(this.jPanel4, -1, -1, 32767).addGap(41, 41, 41)).addGroup(controlsLayout.createSequentialGroup().addComponent(this.jPanel1, -1, -1, 32767).addGap(41, 41, 41)).addGroup(controlsLayout.createSequentialGroup().addComponent(this.mark_points, -1, 347, 32767).addGap(41, 41, 41)).addGroup(controlsLayout.createSequentialGroup().addComponent(this.jPanel2, -2, -1, -2).addContainerGap(20, 32767)).addGroup(controlsLayout.createSequentialGroup().addComponent(this.estimate_start).addGap(28, 28, 28).addComponent(this.estimate_step).addGap(27, 27, 27).addComponent(this.estimate_run).addContainerGap()).addGroup(controlsLayout.createSequentialGroup().addComponent(this.reset_axes).addContainerGap(270, 32767)))));
    
    controlsLayout.setVerticalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(GroupLayout.Alignment.TRAILING, controlsLayout.createSequentialGroup().addContainerGap().addComponent(this.jPanel4, -2, -1, -2).addGap(18, 18, 18).addComponent(this.jPanel1, -2, -1, -2).addGap(18, 18, 18).addComponent(this.mark_points, -2, 105, -2).addGap(18, 18, 18).addComponent(this.jPanel2, -2, -1, -2).addGap(18, 18, 18).addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.estimate_start).addComponent(this.estimate_run).addComponent(this.estimate_step)).addGap(18, 18, 18).addComponent(this.reset_axes).addGap(469, 469, 469)));
    
    this.jPanel4.getAccessibleContext().setAccessibleName("Clustering Method");
    this.jPanel4.getAccessibleContext().setAccessibleDescription("Clustering Method");
    
    getContentPane().add(this.controls, "East");
  }
  
  private void clear_buttonActionPerformed(ActionEvent evt)
  {
    XYPlot p = (XYPlot)this.chart.getPlot();
    p.clearAnnotations();
    
    this.clustering_in_progress = 0;
    this.clustering_finished = 0;
    
    this.data.clear();
    for (int i = 0; i < this.max_means; i++)
    {
      this.means[i].clear();
      this.clusters[i].clear();
      this.global_means = 0;
    }
    if (this.x1.getSeriesCount() == 2 * this.max_means) {
      this.x1.addSeries(this.data);
    }
    this.add_class_1.setSelected(false);
    this.add_class_2.setSelected(false);
  }
  
  private void add_class_1ActionPerformed(ActionEvent evt)
  {
    this.add_class_2.setSelected(false);
    if (this.add_class_1.isSelected())
    {
      this.chart.getXYPlot().getDomainAxis().setAutoRange(false);
      this.chart.getXYPlot().getRangeAxis().setAutoRange(false);
    }
    else
    {
      this.chart.getXYPlot().getDomainAxis().setAutoRange(true);
      this.chart.getXYPlot().getRangeAxis().setAutoRange(true);
    }
  }
  
  private void add_class_2ActionPerformed(ActionEvent evt)
  {
    this.add_class_1.setSelected(false);
    if (this.add_class_2.isSelected())
    {
      this.chart.getXYPlot().getDomainAxis().setAutoRange(false);
      this.chart.getXYPlot().getRangeAxis().setAutoRange(false);
    }
    else
    {
      this.chart.getXYPlot().getDomainAxis().setAutoRange(true);
      this.chart.getXYPlot().getRangeAxis().setAutoRange(true);
    }
  }
  
  private void generate_mst_clusters()
  {
    XYPlot plot = (XYPlot)this.chart.getPlot();
    BasicStroke bs = new BasicStroke(1.0F, 0, 0, 2.0F, new float[] { 5.0F, 5.0F }, 2.0F);
    
    List<XYDataItem> dset = this.data.getItems();
    
    this.x1.removeSeries(this.data);
    for (int i = 0; i < this.max_means; i++) {
      this.means[i].clear();
    }
    Kruskal krusk = new Kruskal(dset);
    krusk.performMST();
    
    int N = dset.size();
    int[][] T = new int[N][N];
    
    double step_size = 0.0D;double threshold = 0.0D;
    
    double[] ARatio = new double[N];
    double[] AThreshold = new double[N];
    double[][] Storage = new double[2 * (N - 1)][3];
    int[] Index = new int[N];
    int[] store = new int[N];
    
    threshold = 0.1D;
    
    step_size = 0.05D;
    int signal = 0;
    int iteration = 0;
    while ((signal == 0) || (this.global_mst_threshold != 0.0D))
    {
      for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
          T[i][j] = krusk.Mat[i][j];
        }
      }
      if (this.global_mst_threshold != 0.0D) {
        threshold = this.global_mst_threshold;
      }
      int counter1 = 0;
      int cluster_no = 0;
      for (int i = 0; i < N; i++) {
        Index[i] = -1;
      }
      AThreshold[iteration] = threshold;
      System.out.println("At " + iteration + "Threshold " + threshold);
      for (int i = 0; i < 2 * (N - 1); i++) {
        Storage[i][0] = (Storage[i][1] = Storage[i][2] = -1.0D);
      }
      plot.clearAnnotations();
      for (int i = 0; i < N - 1; i++) {
        for (int j = i + 1; j < N; j++)
        {
          if ((T[i][j] == 1) && (krusk.DMat[i][j] <= threshold))
          {
            Line2D l1 = new Line2D.Double(((XYDataItem)dset.get(i)).getXValue(), ((XYDataItem)dset.get(i)).getYValue(), ((XYDataItem)dset.get(j)).getXValue(), ((XYDataItem)dset.get(j)).getYValue());
            XYShapeAnnotation a1 = new XYShapeAnnotation(l1, bs, Color.white);
            plot.addAnnotation(a1);
          }
          if ((T[i][j] == 1) && (krusk.DMat[i][j] > threshold))
          {
            T[i][j] = 0;
            T[j][i] = 0;
            
            Storage[counter1][0] = ((XYDataItem)dset.get(i)).getXValue();
            Storage[counter1][1] = ((XYDataItem)dset.get(i)).getYValue();
            Storage[counter1][2] = i;
            
            Storage[(counter1 + 1)][0] = ((XYDataItem)dset.get(j)).getXValue();
            Storage[(counter1 + 1)][1] = ((XYDataItem)dset.get(j)).getYValue();
            Storage[(counter1 + 1)][2] = j;
            counter1 += 2;
          }
        }
      }
      cluster_no = counter1 / 2 + 1;
      
      System.out.println("cluster_no: " + cluster_no);
      counter1 = 0;
      while (Storage[counter1][2] > -1.0D)
      {
        for (int i = 0; i < N; i++) {
          store[i] = -1;
        }
        int counter3 = 0;
        int counter2 = 0;
        int temp_ind = (int)Storage[counter1][2];
        while (Index[temp_ind] > -1)
        {
          counter1++;
          temp_ind = (int)Storage[counter1][2];
          if (Storage[counter1][2] == -1.0D) {
            counter1--;
          }
        }
        if (Storage[counter1][2] > -1.0D)
        {
          temp_ind = (int)Storage[counter1][2];
          if (Index[temp_ind] == -1) {
            Index[temp_ind] = counter1;
          }
          for (int i = 0; i < N; i++)
          {
            temp_ind = (int)Storage[counter1][2];
            if ((T[temp_ind][i] > 0) && (Index[i] == -1))
            {
              Index[i] = counter1;
              store[counter3] = i;
              counter3++;
            }
          }
        }
        while (store[counter2] > -1)
        {
          for (int i = 0; i < N; i++) {
            if ((T[store[counter2]][i] > 0) && (Index[i] == -1))
            {
              Index[i] = counter1;
              store[counter3] = i;
              counter3++;
            }
          }
          counter2++;
        }
        counter1++;
      }
      for (int i = 0; i < N; i++)
      {
        if (Index[i] == 0) {
          break;
        }
        signal = 0;
      }
      int i = 0;
	if (i == N) {
        signal = 1;
      }
      int clust_count = -1;
      int temp_clust = 0;
      for (int j = 0; j < N; j++) {
        if (Index[j] > clust_count + 1)
        {
          temp_clust = Index[j];
          for (int k = j + 1; k < N; k++) {
            if (Index[k] == clust_count + 1) {
              clust_count++;
            }
          }
          Index[j] = (clust_count + 1);
          for (int k = j + 1; k < N; k++) {
            if (Index[k] == temp_clust) {
              Index[k] = (clust_count + 1);
            }
          }
          clust_count++;
        }
        else if (Index[j] == clust_count + 1)
        {
          clust_count = Index[j];
        }
        else if (Index[j] == -1)
        {
          Index[j] = 0;
        }
      }
      clust_count++;
      if (clust_count == 0) {
        clust_count++;
      }
      System.out.println("Code reached here : \n" + clust_count + "\n");
      if (this.global_mst_threshold != 0.0D)
      {
        System.out.println("Final I : ");
        for (i = 0; i < N; i++)
        {
          System.out.println(" " + Index[i] + " ");
          if (Index[i] != -1)
          {
            if (Index[i] < this.max_means) {
              this.clusters[Index[i]].add((XYDataItem)dset.get(i));
            }
          }
          else {
            this.clusters[0].add((XYDataItem)dset.get(i));
          }
        }
        System.out.println("\n");
        this.clustering_finished = 1;
        this.clustering_in_progress = 0;
        break;
      }
      System.out.println("I : ");
      for (int j = 0; j < N; j++) {
        System.out.println(" " + Index[j] + " ");
      }
      System.out.println("\n");
      
      double[][] clust_center = new double[clust_count][2];
      int[] clust_data_count = new int[clust_count];
      for (int j = 0; j < N; j++)
      {
        clust_center[Index[j]][0] += ((XYDataItem)dset.get(j)).getXValue();
        clust_center[Index[j]][1] += ((XYDataItem)dset.get(j)).getYValue();
        clust_data_count[Index[j]] += 1;
      }
      for (int j = 0; j < clust_count; j++)
      {
        clust_center[j][0] /= clust_data_count[j];
        clust_center[j][1] /= clust_data_count[j];
      }
      double intra = 0.0D;
      for (int j = 0; j < N; j++)
      {
        double zpx = Math.pow(((XYDataItem)dset.get(j)).getXValue() - clust_center[Index[j]][0], 2.0D);
        double zpy = Math.pow(((XYDataItem)dset.get(j)).getYValue() - clust_center[Index[j]][1], 2.0D);
        intra += Math.sqrt(zpx + zpy);
      }
      intra /= N;
      
      double inter = Double.MAX_VALUE;
      for (int j = 0; j < clust_count; j++) {
        for (int k = j + 1; k < clust_count; k++)
        {
          double zpx = Math.pow(clust_center[j][0] - clust_center[k][0], 2.0D);
          double zpy = Math.pow(clust_center[j][1] - clust_center[k][1], 2.0D);
          double zp = Math.sqrt(zpx + zpy);
          if (inter < zp) {
            inter = zp;
          }
        }
      }
      if (clust_count == 1)
      {
        ARatio[iteration] = Double.MAX_VALUE;
        System.out.println("Double Max val: " + ARatio[iteration]);
      }
      else
      {
        ARatio[iteration] = (intra / inter);
      }
      System.out.println("ARation: " + ARatio[iteration]);
      iteration++;
      if (signal == 1)
      {
        double min_ratio = Double.MAX_VALUE;
        int min_ratio_ind = Integer.MAX_VALUE;
        for (int j = 0; j < iteration; j++) {
          if (ARatio[j] < min_ratio)
          {
            System.out.println("At: " + j + " MinRatio: " + ARatio[j]);
            min_ratio = ARatio[j];
            min_ratio_ind = j;
          }
        }
        this.global_mst_threshold = AThreshold[min_ratio_ind];
      }
      threshold += step_size;
    }
  }
  
  private void generate_kmeans_clusters(int no_of_steps)
  {
    do
    {
      XYPlot plot = (XYPlot)this.chart.getPlot();
      BasicStroke bs = new BasicStroke(1.0F);
      
      plot.clearAnnotations();
      if (this.clustering_finished == 0)
      {
        this.x1.removeSeries(this.data);
        
        List<XYDataItem> dset = this.data.getItems();
        
        List<XYDataItem> kset = new ArrayList();
        
        List<XYDataItem> new_kset = new ArrayList();
        
        XYDataItem temp_xy = new XYDataItem(0.0D, 0.0D);
        
        int meansCount = 0;
        for (int i = 0; i < this.max_means; i++) {
          if (this.means[i].getItemCount() > 0)
          {
            meansCount++;
            kset.add(i, this.means[i].getDataItem(0));
            this.clusters[i].clear();
            new_kset.add(i, new XYDataItem(0.0D, 0.0D));
          }
        }
        if (meansCount == 0)
        {
          this.clustering_finished = 1;
          this.clustering_in_progress = 0;
          System.out.print("\n Clustering finished :");
          return;
        }
        int check_finished = 1;
        for (int i = 0; i < dset.size(); i++)
        {
          double min = Double.MAX_VALUE;
          int mini = Integer.MAX_VALUE;
          for (int j = 0; j < kset.size(); j++)
          {
            double x_one = ((XYDataItem)dset.get(i)).getXValue();
            double y_one = ((XYDataItem)dset.get(i)).getYValue();
            
            double x_two = ((XYDataItem)kset.get(j)).getXValue();
            double y_two = ((XYDataItem)kset.get(j)).getYValue();
            
            double dist = Math.pow(x_two - x_one, 2.0D) + Math.pow(y_two - y_one, 2.0D);
            if (min > dist)
            {
              min = dist;
              mini = j;
            }
          }
          this.clusters[mini].add((XYDataItem)dset.get(i));
          temp_xy = (XYDataItem)new_kset.get(mini);
          temp_xy = new XYDataItem(temp_xy.getXValue() + ((XYDataItem)dset.get(i)).getXValue(), temp_xy.getYValue() + ((XYDataItem)dset.get(i)).getYValue());
          new_kset.set(mini, temp_xy);
        }
        for (int i = 0; i < this.max_means; i++) {
          if (this.means[i].getItemCount() > 0)
          {
            XYDataItem prev_mean = this.means[i].getDataItem(0);
            double ptx = prev_mean.getXValue();
            double pty = prev_mean.getYValue();
            
            double tx = ((XYDataItem)new_kset.get(i)).getXValue() / this.clusters[i].getItemCount();
            double ty = ((XYDataItem)new_kset.get(i)).getYValue() / this.clusters[i].getItemCount();
            XYDataItem new_mean = new XYDataItem(tx, ty);
            if ((ptx != tx) || (pty != ty)) {
              check_finished = 0;
            }
            System.out.print(i);
            System.out.print("X1  ");
            System.out.print(ptx);
            System.out.print("Y1  ");
            System.out.print(pty);
            System.out.print("X2  ");
            System.out.print(tx);
            System.out.print("Y2  ");
            System.out.print(ty);
            System.out.print("\n");
            
            this.means[i].clear();
            this.means[i].add(new_mean);
          }
        }
        if (check_finished == 1)
        {
          this.clustering_finished = 1;
          this.clustering_in_progress = 0;
          System.out.print("\n Clustering finished :");
        }
      }
      for (int i = 0; i < this.max_means; i++) {
        if (this.means[i].getItemCount() > 0) {
          for (int j = 0; j < this.clusters[i].getItemCount(); j++)
          {
            Line2D l1 = new Line2D.Double(this.means[i].getDataItem(0).getXValue(), this.means[i].getDataItem(0).getYValue(), this.clusters[i].getDataItem(j).getXValue(), this.clusters[i].getDataItem(j).getYValue());
            XYShapeAnnotation a1 = new XYShapeAnnotation(l1, bs, Color.white);
            plot.addAnnotation(a1);
          }
        }
      }
    } while ((this.clustering_finished == 0) && (no_of_steps != this.run_one_step));
  }
  
  private void load_class1ActionPerformed(ActionEvent evt)
  {
    this.clustering_in_progress = 0;
    this.clustering_finished = 0;
    if (this.x1.getSeriesCount() == 40) {
      this.x1.addSeries(this.data);
    }
    this.data.clear();
    for (int i = 0; i < this.max_means; i++)
    {
      this.means[i].clear();
      this.clusters[i].clear();
      this.global_means = 0;
    }
    InputStream bis = null;
    try
    {
      bis = getClass().getResourceAsStream(this.path + this.class1_select.getSelectedItem());
      try
      {
        InputStreamReader inR = new InputStreamReader(bis);
        BufferedReader buf = new BufferedReader(inR);
        int i = 0;
        
        int n = Integer.parseInt(buf.readLine());
        int k = Integer.parseInt(buf.readLine());
        String str;
        while (((str = buf.readLine()) != null) && 
          (i != n))
        {
          String[] val = str.split("        ");
          
          this.data.add(Double.parseDouble(val[0]), Double.parseDouble(val[1]));
          i++;
        }
        i = 0;
        while (((str = buf.readLine()) != null) && (
          (i != k) || (i < this.max_means)))
        {
          String[] val = str.split("        ");
          if (this.global_means < this.max_means)
          {
            this.means[i].add(Double.parseDouble(val[0]), Double.parseDouble(val[1]));
            this.global_means += 1;
          }
          i++;
        }
        XYPlot p = (XYPlot)this.chart.getPlot();
        p.clearAnnotations();
      }
      finally
      {
        bis.close();
      }
    }
    catch (IOException e)
    {
      e.printStackTrace();
    }
  }
  
  private void generate_meanActionPerformed(ActionEvent evt)
  {
    XYPlot plot = (XYPlot)this.chart.getPlot();
    plot.clearAnnotations();
    BasicStroke bs = new BasicStroke(1.0F);
    
    this.clustering_in_progress = 0;
    this.clustering_finished = 0;
    if (this.x1.getSeriesCount() == 40) {
      this.x1.addSeries(this.data);
    }
    this.data.clear();
    System.out.println(100);
    System.out.println(3);
    int count_1 = Integer.parseInt(this.c1.getValue().toString());
    Random adddata = new Random();
    for (int i = 0; i < count_1; i++)
    {
      double addtempx = adddata.nextDouble();
      double addtempy = adddata.nextDouble();
      this.data.add(addtempx, addtempy);
      System.out.print(addtempx);
      System.out.print("\t");
      System.out.print(addtempy);
      System.out.print("\n");
    }
    for (int i = 0; i < this.max_means; i++)
    {
      this.means[i].clear();
      this.clusters[i].clear();
      this.global_means = 0;
    }
    int count_2 = Integer.parseInt(this.c2.getValue().toString());
    Random addmeans = new Random();
    for (int i = 0; (i < count_2) && (i < this.max_means); i++)
    {
      this.global_means += 1;
      double addtempx = addmeans.nextDouble();
      double addtempy = addmeans.nextDouble();
      this.means[i].add(addtempx, addtempy);
      System.out.println(addtempx + "\t" + addtempy);
    }
  }
  
  private void reset_axesActionPerformed(ActionEvent evt)
  {
    XYPlot plot = (XYPlot)this.chart.getPlot();
    
    System.out.println("count: " + plot.getDomainAxisCount());
    
    double r1 = plot.getRangeAxis().getLowerBound();
    double r2 = plot.getDomainAxis().getLowerBound();
    System.out.println(r1 + " lower bound \t" + r2);
    double l1 = plot.getRangeAxis().getUpperBound();
    double l2 = plot.getDomainAxis().getUpperBound();
    System.out.println(l1 + " upper bound \t" + l2);
    double r = r1 < r2 ? r1 : r2;
    double l = l1 > l2 ? l1 : l2;
    System.out.println(r + "\t" + l);
    
    plot.getRangeAxis().setRange(r, l);
    plot.getDomainAxis().setRange(r, l);
  }
  
  private void estimate_startActionPerformed(ActionEvent evt)
  {
    if (((this.kmeans_radio.isSelected()) || (this.mst_radio.isSelected())) && 
      (this.clustering_in_progress == 0))
    {
      this.clustering_in_progress = 1;
      if (this.kmeans_radio.isSelected())
      {
        this.kmeans_in_progress = 1;
        generate_kmeans_clusters(this.run_one_step);
      }
      if (this.mst_radio.isSelected())
      {
        this.mst_in_progress = 1;
        generate_mst_clusters();
      }
    }
  }
  
  private void estimate_stepActionPerformed(ActionEvent evt)
  {
    if ((this.clustering_in_progress == 1) && (this.clustering_finished == 0))
    {
      if ((this.kmeans_radio.isSelected()) && (this.kmeans_in_progress == 1)) {
        generate_kmeans_clusters(this.run_one_step);
      }
      if ((this.mst_radio.isSelected()) && (this.mst_in_progress == 1)) {
        generate_mst_clusters();
      }
    }
  }
  
  private void estimate_runActionPerformed(ActionEvent evt)
  {
    if ((this.clustering_in_progress == 1) && (this.clustering_finished == 0))
    {
      if ((this.kmeans_radio.isSelected()) && (this.kmeans_in_progress == 1)) {
        generate_kmeans_clusters(this.complete_run);
      }
      if ((this.mst_radio.isSelected()) && (this.mst_in_progress == 1)) {
        generate_mst_clusters();
      }
    }
  }
  
  private int max_means = 20;
  private XYSeries[] means = new XYSeries[this.max_means];
  private XYSeries[] clusters = new XYSeries[this.max_means];
  private float[][] ccolors = new float[this.max_means][3];
  private int global_means = 0;
  private double global_mst_threshold = 0.0D;
  private int clustering_finished = 0;
  private int clustering_in_progress = 0;
  private int kmeans_in_progress = 0;
  private int mst_in_progress = 0;
  private int run_one_step = 0;
  private int complete_run = 1;
  private DecimalFormat df = new DecimalFormat("###.##");
  private String[] datasets = { "T1", "T2", "T3", "T4" };
  private String path = "/Data/";
  
  private void Handle(ChangeEvent evt) {}
}
